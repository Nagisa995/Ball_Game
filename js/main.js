const ballUI = {
    idOnUI: document.body.querySelector('#ballBody'),
    axesX: 0,
    axesY: 0,
    accelerationX: 0,
    accelerationY: 0
};

document.body.addEventListener('keydown', addAcceleration);

function addAcceleration(event) {
    console.log(event.code)
    switch (event.code) {
        case ('KeyD'): ballMove(0.5);
            break;
        case ('Space'):
            break;
        case ('KeyA'): ballMove(-0.5);
            break;
        default: return;
    }
}

function ballJump() {

}

function ballMove(acceleration) {
    ballUI.axesX += acceleration;
    if (ballUI.axesX > 95) {
        ballUI.axesX = 95;
    } else if (ballUI.axesX < 0) {
        ballUI.axesX = 0;
    }
}

function ballOnUI() {
    ballUI.idOnUI.setAttribute('style', `bottom: ${ballUI.axesY}%; left: ${ballUI.axesX}%`);
}

setInterval(ballOnUI, 16);