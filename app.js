//computer choice

function getComputerChoice() {
  const options = ["papier", "kamen", "noznice"];

  let randomIndex = Math.floor(Math.random() * options.length);

  return options[randomIndex];
}

// has player won the round ?

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "kamen" && computer === "noznice") ||
    (player === "noznice" && computer === "papier") ||
    (player === "papier" && computer === "kamen")
  );
}

//get round result

let playerScore = 0;
let computerScore = 0;

const getRoundResult = (playerOption) => {
  const computerOption = getComputerChoice();

  const round = hasPlayerWonTheRound(playerOption, computerOption);

  if (round === true) {
    playerScore++;
    return "player won";
  } else {
    computerScore++;
    return "computer won";
  }
};

console.log(getRoundResult("noznice"));
