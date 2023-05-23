"use strict";

let number = Math.floor(Math.random() * 20 + 1);
console.log(number);
let score = 20;
let highscore = 0;
const message = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".two").addEventListener("click", function () {
  const guess = Number(document.querySelector("#guess").value);
  // When there is no input
  if (!guess) {
    message("⛔️ No number!");
  }
  // When player wins
  else if (guess === number) {
    document.querySelector("body").style.backgroundColor = "#60b347"; // only rgb color work
    message("🎉 Correct Number");
    document.querySelector(".number").textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // when guess is not correct
  else if (guess !== number) {
    if (score > 1) {
      message(guess > number ? "↟ too high" : "↧ too low");
      score -= 1;
      document.querySelector(".score").textContent = score;
    } else {
      message("💣 you lose");
    }
  }
});

// reset

document.querySelector("#again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  number = Math.floor(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#000";
  document.querySelector("#guess").value = "";
  document.querySelector(".number").textContent = "?";
});
