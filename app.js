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
  ) 
}

//get round result 
