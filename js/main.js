const ballUI = {
    idOnUI: document.body.querySelector('#ballBody'),
    axesX: 0,
    axesY: 0,
    accelerationX: 0,
    accelerationY: 0,
    ground: 0
};

document.body.addEventListener('keydown', addAcceleration);

function addAcceleration(event) {
    switch (event.code) {
        case ('KeyD'): ballUI.accelerationX = 0.25;
            break;
        case ('Space'): if (ballUI.axesY == ballUI.ground) ballUI.accelerationY = 4.9;
            break;
        case ('KeyA'): ballUI.accelerationX = -0.25;
            break;
        default: return;
    }
}

document.body.addEventListener('keyup', resetAcceleration);

function resetAcceleration(event) {
    switch (event.code) {
        case ('KeyD'): if (ballUI.accelerationX > 0) ballUI.accelerationX = 0;
            break;
        case ('KeyA'): if (ballUI.accelerationX < 0) ballUI.accelerationX = 0;
            break;
        default: return;
    }
}

function ballJump() {
    if (ballUI.accelerationY >= 2.5) {
        ballUI.axesY += 0.5;
        ballUI.accelerationY -= 0.1;
    } else {
        ballUI.axesY -= 0.5;
        ballUI.accelerationY -= 0.5;
    }

    if (ballUI.axesY < 0) {
        ballUI.axesY = 0;
    }
}

function ballMove() {
    ballUI.axesX += ballUI.accelerationX;

    if (ballUI.axesX > 95) {
        ballUI.axesX = 95;
    } else if (ballUI.axesX < 0) {
        ballUI.axesX = 0;
    }
}

function ballOnUI() {
    ballMove()
    ballJump()
    ballUI.idOnUI.setAttribute('style', `bottom: ${ballUI.axesY}%; left: ${ballUI.axesX}%`);
}

setInterval(ballOnUI, 16);