'use strict';
let highscore = [];
let secrectNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const verifyNumber = () => {
  const guess = Number(document.querySelector('.guess').value);

  // TODO: WHEN PLAYERS DO NOT INTRODUSE A CORRECT VALUE
  if (!guess || guess <= 0 || guess > 20) {
    displayMessage('⛔ No Correct Number!');
  }
  // TODO: WHEN PLAYERS WINS
  else if (guess === secrectNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secrectNumber;
    document.querySelector('body').style.backgroundColor = 'rgb(44, 173, 51)';
    document.querySelector('.number').style.width = '30rem';
    highscore.push(score);
    let max = 0;
    for (let i = 0; i < highscore.length; i++) {
      if (max < highscore[i]) max = highscore[i];
    }
    document.querySelector('.highscore').textContent = max;
  }
  // TODO: WHEN PLAYER'S WRONG
  else if (guess !== secrectNumber) {
    displayMessage(guess > secrectNumber ? '📈📈 Too high!' : '📉📉 Too low');
    score = score - 5;
    document.querySelector('.score').textContent = score;
    if (score <= 0 || score === 'NaN') {
      displayMessage('💥 You lost the game! 😣');
      document.querySelector('.score').textContent = 0;
    }
  }
};

document.querySelector('.check').addEventListener('click', verifyNumber);
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') verifyNumber();
});
///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = 20;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#2948ff';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  secrectNumber = Math.floor(Math.random() * 20 + 1);
});
