// script.js
const galeria = document.querySelector('.galeria');
const fotos = galeria.querySelectorAll('img');
let fotoAtual = 0;

function mostrarFoto(n) {
    fotos[fotoAtual].classList.remove('ativa');
    fotos[n].classList.add('ativa');
    fotoAtual = n;
}

function iniciarSlideshow() {
    setInterval(() => {
        fotoAtual = (fotoAtual + 1) % fotos.length;
        mostrarFoto(fotoAtual);
    }, 3000); // Troca de foto a cada 3 segundos
}
// Iniciar a transição assim que a página carregar
document.addEventListener('DOMContentLoaded', iniciarSlideshow);
