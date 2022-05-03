const placeholdersFormulario = document.querySelectorAll('.placeholder');

const camposFormulario = document.querySelectorAll('input');
var ultimoFormulario = null;

const esconderPlaceholder = (placeholder) => {
    placeholder.style.zIndex = '-1';
};

const mostrarPlaceholder = (placeholder) => {
    placeholder.style.zIndex = '999';
};

placeholdersFormulario.forEach(e => e.addEventListener(('mouseover'), e => {
    const placeholder = e.target;
    esconderPlaceholder(placeholder);
}));

camposFormulario.forEach(e => e.addEventListener(('mouseout'), e => {
    const placeholder = e.target.previousElementSibling;
    const formulario = e.target;
    if (formulario.value === '' && formulario !== document.activeElement) {
        mostrarPlaceholder(placeholder);
    }
    else {
        return;
    }
}));


camposFormulario.forEach(e => e.addEventListener(('input'), e => {
    const placeholder = e.target.previousElementSibling;
    const formulario = e.target;
    if (formulario.value !== '') {
        esconderPlaceholder(placeholder);
    }
    else {
        return;
    }
    esconderPlaceholder(placeholder);
}));


// MODIFICAR ABAIXO PARA QUE QUANDO FOR CLICADO FORA DE UMA CAIXA DE INPUT, E SE ESSA MESMA CAIXA DE INPUT ESTIVER VAZIA, MOSTRAR PLACEHOLDER...
camposFormulario.forEach(e => e.addEventListener(('click'), e => {
    const formulario = e.target;
    if(ultimoFormulario !== null) {
        const placeholder = ultimoFormulario.previousElementSibling;
        esconderPlaceholder(placeholder)
        ultimoFormulario = formulario;
    } else {
        mostrarPlaceholder(placeholder);
        ultimoFormulario = formulario;

    }
}));


// function textoAleatorio (){
//     var linhaAleatoria;
//     var arquivo = new XMLHttpRequest();
//     arquivo.open("GET", "textos.txt", false);
//     arquivo.onreadystatechange = function (){
//         if (arquivo.readyState === 4) {
//             if (arquivo.status === 200) {   
//                 var split = allText.split('\n')
//                 var randomNum = Math.floor(Math.random() * split.length);
//                 randomLine = split[randomNum]
//     }
// }



var randomLine;
function gerarTextoAleatorio() {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "textos.txt", false);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200) {
          var allText = rawFile.responseText;
          var split = allText.split('\n')
          var randomNum = Math.floor(Math.random() * split.length);
          randomLine = split[randomNum]
        }
      }
    }
    rawFile.send(null);
    return randomLine
  };

const textoAleatorio = document.querySelector("#texto-aleatorio");
textoAleatorio.innerHTML = gerarTextoAleatorio();
console.log(gerarTextoAleatorio())
