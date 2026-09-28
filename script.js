const imagensPag1 = [
    "img/floresta.jpg",
    "img/floresta2.jpg",
    "img/floresta3.jpg",
    "img/floresta4.jpg",
    "img/floresta5.jpg",
    "img/floresta6.jpg",
    "img/floresta7.jpg"
];

const imagensPag2 = [
    "img/cultura4.jpg",
    "img/cultura5.jpg",
    "img/cultura6.jpg",
    "img/cultura7.jpg",
    "img/cultura8.jpg"
];

// Cria o slideshow com fade para uma seção
function criarSlideshow(secao, imagens, intervalo = 5000) {
    // cria as duas camadas
    const camadas = [document.createElement("div"), document.createElement("div")];
    camadas.forEach(c => {
        c.classList.add("bg-layer");
        secao.prepend(c);
    });

    // pré-carrega as imagens para evitar "piscadas"
    imagens.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    let indice = 0;
    let camadaAtual = 0;

    function trocar() {
        const proxima = camadas[camadaAtual];
        const anterior = camadas[1 - camadaAtual];

        proxima.style.backgroundImage = `url("${imagens[indice]}")`;
        proxima.classList.add("ativa");
        anterior.classList.remove("ativa");

        camadaAtual = 1 - camadaAtual;
        indice = (indice + 1) % imagens.length;
    }

    trocar();
    setInterval(trocar, intervalo);
}

criarSlideshow(document.querySelector(".pag1"), imagensPag1);
criarSlideshow(document.querySelector(".pag2"), imagensPag2);