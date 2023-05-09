let randomnumber1;
let randomnumber2;

randomnumber1 = Math.ceil(Math.random() * 6);

randomnumber1 = Math.ceil(Math.random() * 6);

function roll1() {
    if (randomnumber1 == 1) {
        document.querySelector('.img1').setAttribute('src', './images/dice1.png');
        return 1;
    } else if (randomnumber1 == 2) {
        document.querySelector('.img1').setAttribute('src', './images/dice2.png');
        return 2;
    } else if (randomnumber1 == 3) {
        document.querySelector('.img1').setAttribute('src', './images/dice3.png');
        return 3;
    } else if (randomnumber1 == 4) {
        document.querySelector('.img1').setAttribute('src', './images/dice4.png');
        return 4;
    } else if (randomnumber1 == 5) {
        document.querySelector('.img1').setAttribute('src', './images/dice5.png');
        return 5;
    } else {
        return 6;
    }
}

function roll2() {
    if (randomnumber2 == 1) {
        document.querySelector('.img2').setAttribute('src', './images/dice1.png');
        return 1;
    } else if (randomnumber2 == 2) {
        document.querySelector('.img2').setAttribute('src', './images/dice2.png');
        return 2;
    } else if (randomnumber2 == 3) {
        document.querySelector('.img2').setAttribute('src', './images/dice3.png');
        return 3;
    } else if (randomnumber2 == 4) {
        document.querySelector('.img2').setAttribute('src', './images/dice4.png');
        return 4;
    } else if (randomnumber2 == 5) {
        document.querySelector('.img2').setAttribute('src', './images/dice5.png');
        return 5;
    } else {
        return 6;
    }
}

let die1 = roll1();
let die2 = roll2();


function play() {
    if (die1 > die2) {
        document.querySelector('h1').innerText = "Player 1 wins";
    } else if (die1 < die2) {
        document.querySelector('h1').innerText = "Player 2 wins";
    } else {
        document.querySelector('h1').innerText = "It's a draw";
    }
}

play();