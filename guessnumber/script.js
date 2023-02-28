'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct numbers';
// document.querySelector('.number').textContent = 19;

let number  = Math.trunc(Math.random()*20)+1
let score = 20 ;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number((document.querySelector('.guess').value))
    console.log(guess);
    if(!guess){
        document.querySelector('.message').textContent = 'no number'
    }
    else if (number === guess) {
        document.querySelector('.number').textContent =number;
        document.querySelector('.message').textContent = 'correct numbers';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score> highscore){
            highscore = score;
        }
        document.querySelector('.highscore').textContent = highscore;



    }
    else if (number < guess) {
        if(score > 1){
            document.querySelector('.message').textContent = 'too high';
            score --;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'game over';
            document.querySelector('.score').textContent = 0;

        }
        
    }
    else if (number > guess) {
        if(score > 1){
            document.querySelector('.message').textContent = 'too low   ';
            score --;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'game over';
            document.querySelector('.score').textContent = 0;

        }
    }

})
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    number  = Math.trunc(Math.random()*20)+1
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'start guessing   ';
    document.querySelector('.number').style.width = '15rem';



})

