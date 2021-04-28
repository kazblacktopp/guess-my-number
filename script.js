"use strict";

// DOM elements
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const checkBox = document.querySelector(".check");
const guess = document.querySelector(".guess");
const body = document.querySelector("body");
const number = document.querySelector(".number");
const highScoreLabel = document.querySelector(".highscore");
const againButton = document.querySelector(".again");

// State variables
let randNumber = randomNumber();
let currentScore = 20;
let highscore = 0;

// Random number generator function
function randomNumber() {
  return Math.trunc(Math.random() * 20 + 1);
}

// Add event listener for user input
checkBox.addEventListener("click", checkGuess);

// Process user input
function checkGuess() {
  const currentGuess = Number(guess.value);
  if (currentGuess === randNumber) {
    message.textContent = "🎉 Correct Number!";
    body.classList.add("bg-color");
    number.textContent = randNumber;
    if (currentScore > highscore) {
      highScoreLabel.textContent = currentScore;
      highscore = currentScore;
    }
  } else {
    if (currentScore > 1) {
      if (!currentGuess) {
        message.textContent = "⛔️ No number!";
      } else if (currentGuess < randNumber) {
        message.textContent = "📉 Too low!";
      } else if (currentGuess > randNumber) {
        message.textContent = "📈 Too high!";
      }
    } else {
      message.textContent = "💥 You lost the game!";
      checkBox.removeEventListener("click", checkGuess);
    }
    currentScore--;
    score.textContent = currentScore;
  }
}

// Reset game when 'Again' button clicked
againButton.addEventListener("click", function () {
  randNumber = randomNumber();
  currentScore = 20;
  body.classList.remove("bg-color");
  number.textContent = "?";
  message.textContent = "Start guessing...";
  score.textContent = currentScore;
  guess.value = "";
  checkBox.addEventListener("click", checkGuess);
});
