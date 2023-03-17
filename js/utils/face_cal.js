

function calSend(result1, result2, percentage, requestDetection){ // percentage = 0..1
    const scale1 = result1.holistic.scale;
    const leftEyeOpen1 = result1.holistic.leftEyeOpen;
    const rightEyeOpen1 = result1.holistic.rightEyeOpen;
    const mouthOpen1 = result1.holistic.mouthOpen;
    const centerX1 = result1.holistic.center[0];
    const centerY1 = result1.holistic.center[1];
    const yaw1 = result1.angle.yaw;
    const pitch1 = result1.angle.pitch;
    const roll1 = result1.angle.roll;

    const scale2 = result2.holistic.scale;
    const leftEyeOpen2 = result2.holistic.leftEyeOpen;
    const rightEyeOpen2 = result2.holistic.rightEyeOpen;
    const mouthOpen2 = result2.holistic.mouthOpen;
    const centerX2 = result2.holistic.center[0];
    const centerY2 = result2.holistic.center[1];
    const yaw2= result2.angle.yaw;
    const pitch2 = result2.angle.pitch;
    const roll2 = result2.angle.roll;

    const cal = (value1, value2) => {
        return value1 + (value2 - value1) * percentage;
    }
    return {
        'expressions': result2.expressions,
        'holistic': {
            faceLandmarks:result2.holistic.faceLandmarks,
            poseLandmarks:result2.holistic.poseLandmarks,
            ratio:result2.holistic.ratio,
            scale:cal(scale1, scale2),

            leftEyeOpen:cal(leftEyeOpen1, leftEyeOpen2),
            rightEyeOpen:cal(rightEyeOpen1, rightEyeOpen2),
            mouthOpen:cal(mouthOpen1, mouthOpen2),
            center: [cal(centerX1, centerX2), cal(centerY1, centerY2)]
        },
        'angle': {
            'yaw': cal(yaw1, yaw2),
            'pitch': cal(pitch1, pitch2),
            'roll': cal(roll1, roll2)
        },
        'requestDetection': requestDetection
    }
}

function calculateFaceAngle(landmarks){
    const degrees = (theta) => ((theta * 180) / Math.PI) % 360;
    const normalize = (v) => { // normalize vector
        const length = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
        v[0] /= length;
        v[1] /= length;
        v[2] /= length;
        return v;
    };
    const subVectors = (a, b) => { // vector subtraction (a - right)
        const x = a[0] - b[0];
        const y = a[1] - b[1];
        const z = a[2] - b[2];
        return [x, y, z];
    };
    const crossVectors = (a, b) => { // vector cross product (a x right)
        const x = a[1] * b[2] - a[2] * b[1];
        const y = a[2] * b[0] - a[0] * b[2];
        const z = a[0] * b[1] - a[1] * b[0];
        return [x, y, z];
    };
    // 3x3 rotation matrix to Euler angles based on https://www.geometrictools.com/Documentation/EulerAngles.pdf
    const rotationMatrixToEulerAngle = (r) => {
        // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
        const [r00, _r01, _r02, r10, r11, r12, r20, r21, r22] = r;
        let thetaX;
        let thetaY;
        let thetaZ;
        if (r10 < 1) { // YZX calculation
            if (r10 > -1) {
                thetaZ = Math.asin(r10);
                thetaY = Math.atan2(-r20, r00);
                thetaX = Math.atan2(-r12, r11);
            } else {
                thetaZ = -Math.PI / 2;
                thetaY = -Math.atan2(r21, r22);
                thetaX = 0;
            }
        } else {
            thetaZ = Math.PI / 2;
            thetaY = Math.atan2(r21, r22);
            thetaX = 0;
        }
        if (isNaN(thetaX)) thetaX = 0;
        if (isNaN(thetaY)) thetaY = 0;
        if (isNaN(thetaZ)) thetaZ = 0;

        return {pitch: degrees(2 * -thetaX), yaw: -degrees(2 * -thetaY), roll: degrees(2 * -thetaZ)};
    };


    const top = landmarks[10];
    const bottom = landmarks[152];
    const left = landmarks[234];
    const right = landmarks[454];
    const pts = [[top['x'], top['y'], top['z']], [bottom['x'], bottom['y'], bottom['z']], [left['x'], left['y'], left['z']], [right['x'], right['y'], right['z']]];

    const y_axis = normalize(subVectors(pts[1], pts[0]));
    let x_axis = normalize(subVectors(pts[3], pts[2]));
    const z_axis = normalize(crossVectors(x_axis, y_axis));
    // adjust x_axis to make sure that all axes are perpendicular to each other
    x_axis = crossVectors(y_axis, z_axis);

    // Rotation Matrix from Axis Vectors - http://renderdan.blogspot.com/2006/05/rotation-matrix-from-axis-vectors.html
    // 3x3 rotation matrix is flatten to array in row-major order. Note that the rotation represented by this matrix is inverted.
    const matrix = [
        x_axis[0], x_axis[1], x_axis[2],
        y_axis[0], y_axis[1], y_axis[2],
        z_axis[0], z_axis[1], z_axis[2],
    ];
    return rotationMatrixToEulerAngle(matrix);
}

function getEssentialStuff(landmarks,box){
    // const getRect = (landmarks) => {
    //     let minX = 100000, maxX = -100000;
    //     let minY = 100000, maxY = -100000;
    //     for (const o of landmarks) {
    //         const x = o['x'];
    //         const y = o['y'];
    //         if (x > maxX) {
    //             maxX = x;
    //         } else if (x < minX) {
    //             minX = x;
    //         }
    //         if (y > maxY) {
    //             maxY = y;
    //         } else if (y < minY) {
    //             minY = y;
    //         }
    //     }
    //     return {topLeft : [minX, minY], width:maxX - minX, height:maxY - minY};
    // }
    //
    // const rect = getRect(landmarks);


    //scale
    let scale = -10;
    //for normalizing
    const faceLandmarks = [];
    for(const o of landmarks){
        const zValue = o['z'];
        if(scale < zValue){
            scale = zValue;
        }

        // const width = (o['x'] - rect.topLeft[0]);
        // const height = (o['y'] - rect.topLeft[1]);
        // faceLandmarks.push({
        //     x:width / rect.width * 100,
        //     y:height / rect.height * 100,
        //     z:zValue,
        // });

        faceLandmarks.push({
            x:(o['x'] - box.xMin) / box.width * 100,
            y:(o['y'] - box.yMin) /  box.height * 100,
            z:zValue,
        });
    }

    const left = faceLandmarks[119];
    const right = faceLandmarks[348];
    const top = faceLandmarks[151];
    const bottom = faceLandmarks[199];

    const lipTop = faceLandmarks[13];
    const lipBottom = faceLandmarks[14];

    const leftEyeT = faceLandmarks[159];
    const leftEyeB = faceLandmarks[145];

    const rightEyeT = faceLandmarks[386];
    const rightEyeB = faceLandmarks[374];

    const leftEyeOpen = Math.abs(leftEyeT.y - leftEyeB.y);
    const rightEyeOpen = Math.abs(rightEyeT.y - rightEyeB.y);
    const mouthOpen = Math.abs(lipTop.y - lipBottom.y);

    return {
        faceLandmarks:faceLandmarks,
        scale:scale,
        ratio:box.width/box.height,
        leftEyeOpen:leftEyeOpen,
        rightEyeOpen:rightEyeOpen,
        mouthOpen:mouthOpen,
        center:[(left.x + right.x + top.x + bottom.x)/4, (left.y + right.y + top.y + bottom.y)/4]
    }
}