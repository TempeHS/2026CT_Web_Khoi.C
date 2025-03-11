gamerScore = "1";
computerScore = 1;

sumScore = gamerScore + computerScore;

alert(sumScore);

function roshambo() {
  computer_guess = computerGuess();

  player_input = prompt("Rock Paper Scissors");

  if (player_input == "rock") {
    player_guess = 1;
  } else if (player_input == "paper") {
    player_guess = 2;
  } else {
    player_guess = 3;
  }

  computer_up = computer_guess + 1;
  if (computer_up > 3) {
    computer_up = 1;
  }
  computer_down = computer_guess - 1;
  if (computer_down < 1) {
    computer_down = 3;
  }

  if (player_guess == computer_guess) {
    document.getElementById("user_feedback").innerHTML =
      "You Drew, you played " + player_input;
  } else if (player_guess == computer_up) {
    document.getElementById("user_feedback").innerHTML =
      "You Won, you played " + player_input;
  } else if (player_guess == computer_down) {
    document.getElementById("user_feedback").innerHTML =
      "You Lost, you played " + player_input;
  }

  function computerGuess() {
    return Math.ceil(Math.random() * 3);
  }
}
