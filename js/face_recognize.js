const video = document.createElement('video');
video.width = 400;
video.height = 300;

let volumeFunction;

let camera = false;

let videoStream;
let audioStream;


let detector;

let resolvePromise;

async function loadFaceMesh() {
    const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
    const detectorConfig = {
        runtime: 'mediapipe',
        solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh',
    }
    detector = await faceLandmarksDetection.createDetector(model, detectorConfig);
}

async function _faceDetect() {
    const faces = await detector.estimateFaces(video, {});
    let data = JSON.stringify({});
    if (faces.length > 0) {
        const face = faces[0].keypoints;
        const box = faces[0].box;
        const essentialStuff = getEssentialStuff(face,box);
        data = JSON.stringify({
            'expressions': expressions,
            'face': {
                landmarks: essentialStuff.faceLandmarks,
                ratio: essentialStuff.ratio,
                scale: essentialStuff.scale,
                leftEyeOpen: essentialStuff.leftEyeOpen,
                rightEyeOpen: essentialStuff.rightEyeOpen,
                mouthOpen: essentialStuff.mouthOpen,
                center: essentialStuff.center
            },
            'angle': calculateFaceAngle(face),
            'volume': volumeFunction(),
        });
    }
    detectionCallback(data);
}


/*
Request
 */

let faceDetecting = false;
let _startEmotionInternal;

async function start(isMobileWeb, detectEmotion) {
    faceDetecting = true;
    _faceDetect().then();
    if(detectEmotion) {
        _startEmotionInternal = setInterval(() => {
            requestExpression();
        }, isMobileWeb ? 500 : 200);
    }
}

function requestNextFrame(){
    if (faceDetecting) {
        requestAnimationFrame(_faceDetect);
    }
}


async function getAvailableDevices() {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const cams = devices.filter(device => device.kind === 'videoinput')
    const mics = devices.filter(device => device.kind === 'audioinput')
    return JSON.stringify({
        cams: cams,
        mics: mics,
    });
    // console.log(`${device.kind}: ${device.label} id = ${device.deviceId}`);
}

async function getDevicePermission() {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    });
    if (stream) {
        stream.getVideoTracks().forEach(function (track) {
            track.stop();
        });
        stream.getAudioTracks().forEach(function (track) {
            track.stop();
        });
        return true;
    } else {
        return false;
    }
}

async function turnOnCamera(deviceIds) {
    const constraints = {
        video: {
            width: {ideal: 400}, height: {ideal: 300},
            deviceId: deviceIds[0] ? {exact: deviceIds[0]} : undefined
        },
        audio: {deviceId: deviceIds[1] ? {exact: deviceIds[1]} : undefined}
    };

    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    if (stream) {
        if (stream.getVideoTracks().length > 0) {
            const oldVideo = videoStream;
            camera = true;
            videoStream = new MediaStream([stream.getVideoTracks()[0]]);
            video.srcObject = videoStream;
            video.load();
            await video.play();
            if (oldVideo) {
                oldVideo.getTracks().forEach(function (track) {
                    track.stop();
                });
            }
            if (stream.getAudioTracks().length > 0) {
                const oldAudio = audioStream;
                audioStream = new MediaStream([stream.getAudioTracks()[0]]);
                voiceSetting(audioStream);
                if (oldAudio) {
                    oldAudio.getTracks().forEach(function (track) {
                        track.stop();
                    });
                }
            }
            return true;
        }
    }
    return false;
}

function voiceSetting(stream) {
    const audioContext = new AudioContext();
    const audioSource = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 512;
    analyser.minDecibels = -127;
    analyser.maxDecibels = 0;
    analyser.smoothingTimeConstant = 0;
    audioSource.connect(analyser);
    const volumes = new Uint8Array(analyser.frequencyBinCount);
    volumeFunction = () => {
        analyser.getByteFrequencyData(volumes);
        let volumeSum = 0;
        for (const volume of volumes)
            volumeSum += volume;
        const averageVolume = volumeSum / volumes.length;
        // Value range: 127 = analyser.maxDecibels - analyser.minDecibels;
        return (averageVolume * 100 / 127);
    };
}


function closeDetection() {
    faceDetecting = false;
    if (_startEmotionInternal) {
        clearInterval(_startEmotionInternal);
    }
    if (videoStream && audioStream) {
        videoStream.getTracks().forEach(function (track) {
            track.stop();
        });
        audioStream.getTracks().forEach(function (track) {
            track.stop();
        });
        videoStream = null;
        audioStream = null;
        camera = false;
        video.srcObject = null;
    }
    expressionCount = 10;
}


/*
expression
 */

let detectionWorker;
let expressions;
let expressionCount = 10;

detectionWorker = new Worker('/js/worker/expression_worker.js');

async function loadExpression() {
    await new Promise(function (resolve, reject) {
        resolvePromise = resolve;
        detectionWorker.postMessage({orderType: loadModel});
    });
}

detectionWorker.onmessage = async function (event) {
    const {respondType} = event.data;
    switch (respondType) {
        case getExpression:
            expressions = event.data.data;
            break;
        case modelLoaded:
            resolvePromise();
            break;
    }
};

async function requestExpression() {
    detectionWorker.postMessage({orderType: requestExp, data: getCaptureFrame()});
}


function getCaptureFrame() {
    try {
        const canvasElement = new OffscreenCanvas(video.videoWidth, video.videoHeight);
        const capCtx = canvasElement.getContext('2d');
        capCtx.translate(video.width, 0);
        capCtx.scale(-1, 1);
        capCtx.drawImage(video, 0, 0);
        return capCtx.getImageData(0, 0, video.videoWidth, video.videoHeight);
    } catch (e) {
        return null;
    }
}


