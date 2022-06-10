const mediaElem = document.getElementById("audio");
const apagado = document.getElementById("apagado");
const aceso = document.getElementById("aceso");
const explosao = document.getElementById("explosao");
let mytimeout;

function estourar() {
  mediaElem.currentTime = 0;
  mediaElem.play();
  aceso.style.display = "none";
  explosao.style.display = "flex";
}

document.getElementById("aceso").addEventListener("click", function () {
  clearTimeout(mytimeout);
  aceso.style.display = "none";
  apagado.style.display = "flex";
});

document.getElementById("button").addEventListener("click", function () {
  mytimeout = setTimeout(estourar, 10000);
  apagado.style.display = "none";
  aceso.style.display = "flex";
});

document.getElementById("reiniciar").addEventListener("click", function () {
  explosao.style.display = "none";
  aceso.style.display = "none";
  apagado.style.display = "flex";
  clearTimeout(mytimeout);
  mediaElem.pause();
});
