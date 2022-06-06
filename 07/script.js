'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // no input from plater
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number';

        // Player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number';

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        // Player loose
    } else if (guess > secretNumber) {
        if (score < 1) {
            document.querySelector('.message').textContent =
                '☠️ You lost the Game!';
            return;
        }
        // Too High
        document.querySelector('.message').textContent = '📈 Too High!';
        score--;
        document.querySelector('.score').textContent = score;
        // Too Low
    } else if (guess < secretNumber) {
        if (score < 1) {
            document.querySelector('.message').textContent =
                '☠️ You lost the Game!';
            return;
        }
        document.querySelector('.message').textContent = '📉 Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
    }
});
