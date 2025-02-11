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

// Estilos CSS para controlar a visibilidade das fotos
/* style.css */
.galeria img {
    opacity: 0; /* Todas as fotos começam invisíveis */
    transition: opacity 0.5s ease-in-out; /* Transição suave de opacidade */
    position: absolute; /* Permite sobreposição das fotos */
}

.galeria img.ativa {
    opacity: 1; /* A foto ativa fica visível */
    position: relative; /* Remove a foto do fluxo do documento */
}
