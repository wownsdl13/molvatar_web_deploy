self.importScripts('/js/worker/worker_order.js');
self.importScripts('/js/api/face-api.js');
self.importScripts('/js/worker/face_env_worker_patch.js');

let load = false;

async function loadExpressionModel() {
    if (!load) {
        await faceapi.env.initialize();
        await faceapi.nets.ssdMobilenetv1.loadFromUri('/models');
        await faceapi.nets.faceExpressionNet.loadFromUri('/models');
        load = true;
    }
    _send(modelLoaded);
}

async function getExpressions(frame) {
    if (load) {
        const canvas = new Canvas(frame.width, frame.height);
        const ctx = canvas.getContext('2d');
        ctx.putImageData(frame, 0, 0);
        const e = (await faceapi.detectSingleFace(canvas).withFaceExpressions())?.expressions;
        _send(getExpression, e);
    }
}

function _send(respondType, data) {
    self.postMessage({respondType: respondType, data: data});
}

self.onmessage = async e => {
    const {orderType, data} = e.data;
    switch (orderType) {
        case requestExp:
            await getExpressions(data);
            break;
        case loadModel:
            await loadExpressionModel();
            break;
    }
}