'use strict';
const roll = document.querySelector('.btn--roll');
const newgame = document.querySelector('.btn--new');
const hold = document.querySelector('.btn--hold');
const label = document.querySelector('.label');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
let Player1score = Number(document.getElementById('score--0').textContent);
let Player2score = Number(document.getElementById('score--1').textContent);
let Player1Current = Number(document.getElementById('current--0').textContent);
let Player2Current =Number( document.getElementById('current--1').textContent);
let won = false;


function diceRoll() {
    if (!won) {
        let diceNumber = Math.trunc(Math.random() * 6)+1;
        console.log(diceNumber);
        showdice(diceNumber);
        switchPlayer(diceNumber);
        if (diceNumber !== 1){
            addToCurrent(diceNumber);
        }
    }
}

function switchPlayer(diceNumber) {
    if (diceNumber === 1 && player1.classList.contains('player--active')){
        console.log('player 1 is active...switching');
        player1.classList.remove('player--active');
        player2.classList.add('player--active');
        document.getElementById('current--0').textContent = `0`;
        document.getElementById('score--0').textContent = `${Player1score}`;
        Player1Current = 0;
        if (Player1score >= 10){
            won = true;
            winner(0);

        }
        // Player1Current = 0;
        
    }
    else if (diceNumber === 1 && player2.classList.contains('player--active')){
        console.log('player 2 is active...switching');
        player2.classList.remove('player--active');
        player1.classList.add('player--active');
        document.getElementById('current--1').textContent = `0`;
        // Player2score += Player2Current;
        document.getElementById('score--1').textContent = `${Player2score}`;
        Player2Current = 0;
        if (Player2score >= 10){
            won = true;
            winner(1);

        }
    }
}
function winner(player){
    if (player === 0){
        player1.classList.add('player--winner');
        

    }
    else{
        player2.classList.add('player--winner');
       

    }
}
function addToCurrent(diceNumber){
    let player1active = player1.classList.contains('player--active');
    if (player1active){
        Player1Current += diceNumber;
        console.log(`player 1 current is ${Player1Current}`);
        document.getElementById('current--0').textContent = `${Player1Current}`;

    }
    else{
        Player2Current += diceNumber;
        console.log(`player 2 current is ${Player2Current}`);
        document.getElementById('current--1').textContent = `${Player2Current}`;

    }
}
function holding(){
    if(!won){
        let player1active = player1.classList.contains('player--active');
        if (player1active){
            Player1score += Player1Current;
            document.getElementById('score--0').textContent = `${Player1score}`;
            switchPlayer(1);
        }
        else{
            Player2score += Player2Current;
            document.getElementById('score--1').textContent = `${Player2score}`;
            switchPlayer(1);
        }
    }
}
function showdice(diceNumber){
    let image = document.querySelector('.dice');
    image.src = `images/dice-${diceNumber}.png`;
}
function reset(){
    Player1score = 0;
    Player2score = 0;
    Player1Current = 0;
    Player2Current =0;
    document.getElementById('score--0').textContent = `${Player1score}`;
    document.getElementById('score--1').textContent = `${Player2score}`;
    document.getElementById('current--0').textContent = `${Player1Current}`;
    document.getElementById('current--1').textContent = `${Player2Current}`;
    won = false;
    if(player1.classList.contains('player--winner')){
        player1.classList.remove('player--winner');
    }
    else if(player2.classList.contains('player--winner')){
        player2.classList.remove('player--winner');
    }
}
if (won === false){
roll.addEventListener('click', diceRoll);
hold.addEventListener('click', holding);
}
newgame.addEventListener('click', reset);