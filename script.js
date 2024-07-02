function playRockPaperScissor(player1, player2) {
  if (
    (player1 === "Pedra" && player2 === "Pedra") ||
    (player1 === "Papel" && player2 === "Papel") ||
    (player1 === "Tesoura" && player2 === "Tesoura")
  ) {
    return "Empate!";
  }
  player1 === player2;

  console.log(playRockPaperScissor);
  if (
    (player1 === "Pedra" && player2 === "Papel") ||
    (player1 === "Papel" && player2 === "Tesoura") ||
    (player1 === "Tesoura" && player2 === "Pedra")
  ) {
    return "Jogador 2 venceu!";
  }
  player1 <= player2;
  console.log(playRockPaperScissor);

  if (
    (player1 === "Pedra" && player2 === "Tesoura") ||
    (player1 === "Papel" && player2 === "Pedra") ||
    (player1 === "Tesoura" && player2 === "Papel")
  ) {
    return "Jogador 1 venceu!";
  }
  player1 <= player2;
  console.log(playRockPaperScissor);
}
