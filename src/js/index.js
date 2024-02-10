var entrada = document.getElementById("entrada");
var textoExibido = document.getElementById("texto-normal");
var copiar = document.getElementById("copiar");
var imagem = document.querySelector("#saida-dados .imagem-lupa");
var titulo = document.querySelector("#saida-dados .subtitulo-saida");
var paragrafoInformativo = document.querySelector(
  "#saida-dados .paragrafo-saida"
);
var valor;

entrada.addEventListener("input", function () {
  valor = entrada.value;
  if (valor != "") {
    imagem.classList.add("hidden");
    titulo.classList.add("hidden");
    paragrafoInformativo.classList.add("hidden");
    textoExibido.innerHTML = valor;
    copiar.style.display = 'flex'
  } else {
    imagem.classList.remove("hidden");
    titulo.classList.remove("hidden");
    paragrafoInformativo.classList.remove("hidden");
    textoExibido.innerHTML = "";
    copiar.style.display = 'none'

  }
});

function codificar() {
  var textoCodificado = btoa(valor);
  textoExibido.innerHTML = textoCodificado;
}

function descodificar(){
  textoExibido.innerHTML = valor;
}

