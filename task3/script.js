const redbulb = document.querySelector('#red');
const yellowbulb = document.querySelector('#yellow');
const greenbulb = document.querySelector('#green');

function makeRed() {
    clearLight();
    redbulb.style.background = ('red');
    redbulb.removeEventListener('click', makeRed);
    redbulb.addEventListener('click', makeRed);
}

function makeYellow() {
    clearLight();
    yellowbulb.style.background = ('yellow');
    yellowbulb.removeEventListener('click', makeYellow);
    yellowbulb.addEventListener('click', makeYellow);
}

function makeGreen() {
    clearLight();
    greenbulb.style.background = ('green');
    greenbulb.removeEventListener('click', makeGreen);
    greenbulb.addEventListener('click', makeGreen);
}

redbulb.addEventListener('click', makeRed);
yellowbulb.addEventListener('click', makeYellow);
greenbulb.addEventListener('click', makeGreen);

function clearLight() {
    document.getElementById('red').style.backgroundColor = 'black';
    document.getElementById('yellow').style.backgroundColor = 'black';
    document.getElementById('green').style.backgroundColor = 'black';
}