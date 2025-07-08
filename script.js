document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("meuBotao");
  const paragrafo = document.getElementById("mensagem");

  botao.addEventListener("click", function () {
    paragrafo.textContent = "Seja muito Bem-vindo a minha página!";
  });
});
