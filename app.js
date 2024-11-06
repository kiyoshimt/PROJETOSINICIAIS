alert("Boas vindas ao jogo do número secreto!");

let numeroSecreto = 29;
let acertou = false;

while (!acertou) {
  let chute = parseInt(prompt("Escolha um número entre 1 e 30"));

  if (chute === numeroSecreto) {
    acertou = true;
    alert("Isso aí! Você descobriu o número secreto!");

    // Exibe o container de vitória ao acertar o número
    document.getElementById("container").style.display = "flex";
  } else {
    // Verifica a proximidade e fornece feedback
    if (Math.abs(chute - numeroSecreto) <= 3) {
      alert("Você está muito perto!");
    } else if (Math.abs(chute - numeroSecreto) <= 6) {
      alert("Você está perto!");
    } else {
      alert("Você está longe...");
    }
  }
}
