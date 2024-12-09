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

//get round result , doplnit na remizu

let playerScore = 0;
let computerScore = 0;

const getRoundResult = (playerOption) => {
  const computerOption = getComputerChoice();

  const round = hasPlayerWonTheRound(playerOption, computerOption);

  if (round === true) {
    playerScore++;
    return "player won";
  }
  if (playerOption === computerOption) {
    return "it is a tie";
  } else {
    computerScore++;
    return "computer won";
  }
};

console.log(getRoundResult("rock"));
