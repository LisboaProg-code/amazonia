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

const pag1 = document.querySelector(".pag1");
const pag2 = document.querySelector(".pag2");

let indicePag1 = 0;
let indicePag2 = 0;

function trocarBackground() {

    pag1.style.backgroundImage = `url("${imagensPag1[indicePag1]}")`;
    pag2.style.backgroundImage = `url("${imagensPag2[indicePag2]}")`;

    indicePag1++;
    indicePag2++;

    if (indicePag1 >= imagensPag1.length) {
        indicePag1 = 0;
    }

    if (indicePag2 >= imagensPag2.length) {
        indicePag2 = 0;
    }
}

trocarBackground();

setInterval(trocarBackground, 5000);