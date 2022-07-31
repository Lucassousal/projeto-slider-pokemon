const btnAvancar = document.getElementById("button-avancar");
const btnVoltar = document.getElementById("button-voltar");
const cartoes = document.querySelectorAll(".card");
let cartaoAtual = 0;

function esconderCard() {
  const cartaoSelecionado = document.querySelector(".active");
  cartaoSelecionado.classList.remove("active");
}

function mostrarCard(indice) {
  cartoes[indice].classList.add("active");
}

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;

  esconderCard();
  cartaoAtual++;
  mostrarCard(cartaoAtual);
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;

  esconderCard();
  cartaoAtual--;
  mostrarCard(cartaoAtual);
});
