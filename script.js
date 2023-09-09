'use strict';

const secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector(".check").addEventListener('click', function(){
    const guess = Number(document.querySelector(".guess").value);
console.log(typeof guess);

// When there is no input
if(!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number';
displayMessage('⛔ No Number!');
// When player wins the game
} else if(guess===secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🥳 Correct Number');

    document.querySelector('body').style.backgroundColor = "#60b347";
    document.querySelector('.number').style.width = '30rem';

    if(score > highscore) {
      highscore = score;  
      document.querySelector('.highscore').textContent = highscore;
    }
// When guess is wrong
} else if(guess !== secretNumber) {
    if(score > 1){
        displayMessage(guess > secretNumber ? '😲 Too High' : '🥺 Too Low' ) ; 
    score--;
    document.querySelector('.score').textContent = score; 
    } else {
        displayMessage('You lost the game'); 
        document.querySelector('.score').textContent = 0; 
    }   

// When guess is too high
// } else if(guess < secretNumber){
//     if(score > 1){
//         document.querySelector('.message').textContent = '🥺 Too Low'; 
//     score--;
//     document.querySelector('.score').textContent = score; 
//     } else {
//         document.querySelector('.message').textContent = 'You lost the game'; 
//         document.querySelector('.score').textContent = 0; 
//     }   

// When guess is too low
// } else if(guess > secretNumber){
//     if(score > 1){
//         document.querySelector('.message').textContent = '😲 Too High'; 
//     score--;
//     document.querySelector('.score').textContent = score; 
//     } else {
//         document.querySelector('.message').textContent = 'You lost the game'; 
//         document.querySelector('.score').textContent = 0; 
//     }    
}
});

// Resetting the game

document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = '15rem';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector(".guess").value = null;
    document.querySelector('.number').textContent = '?';
});