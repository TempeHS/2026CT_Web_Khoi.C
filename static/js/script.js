player_guess = prompt("rock paper scissors");

computer_guess = computerGuess();
alert(computer_guess);

if (player_guess == "rock" && computer_guess == 1) {
  document.getElementById("user_feedback").innerHTML = Draw;
}
if (player_guess == "rock" && computer_guess_guess == 2) {
  document.getElementById("user_feedback").innerHTML = Lose;
}
if (player_guess == "rock" && computer_guess == 3) {
  document.getElementById("user_feedback").innerHTML = Win;
}

if (player_guess == "scissors" && computer_guess == 3) {
  document.getElementById("user_feedback").innerHTML = Draw;
}
if (player_guess == "scissors" && computer_guess == 1) {
  document.getElementById("user_feedback").innerHTML = Lose;
}
if (player_guess == "scissors" && computer_guess == 2) {
  document.getElementById("user_feedback").innerHTML = Win;
}

if (player_guess == "paper" && computer_guess == 2) {
  document.getElementById("user_feedback").innerHTML = Draw;
}
if (player_guess == "paper" && computer_guess == 3) {
  document.getElementById("user_feedback").innerHTML = Lose;
}
if (player_guess == "paper" && computer_guess == 1) {
  document.getElementById("user_feedback").innerHTML = Win;
}

function computerGuess() {
  return Math.floor(Math.random() * 3 + 1);
}
