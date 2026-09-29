/* ===== pag1 e pag2: slideshow de fundo ===== */

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
  "img/cultura8.jpg",
  "img/norteNordeste.jpeg"
];

const imagensPag6 = [
  "img/queimada.jpg",
  "img/queimada2.webp",
  "img/queimada3.jpg",
  "img/queimada4.avif",
  "img/queimada6.jpg",
  "img/queimada7.jpg",
  "img/queimada8.jpg",
  "img/queimada9.jpg",
  "img/queimada10.jpg",
]

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
criarSlideshow(document.querySelector(".pag6"), imagensPag6);


/* ===== pag4: cards com setas, bolinhas, botão de tema e player ===== */

// Troque as fotos, nomes, itens e toadas aqui
// (a posição de cada foto, nome e item deve bater nos três arrays)
const temas = [
  {
    botao: "❤️",
    cor: "#062a77",
    corBorda: "#093ca9",
    fotos: [
      "img/apresentadorCapri.jpg",
      "img/levantadorCapri.jpeg",
      "img/batucada.JPEG",
      "img/portaCapri.jpg",
      "img/amoCapri.jpg",
      "img/sinhaCapri.jpg",
      "img/rainhaCapri.jpg",
      "img/cunhaCapri.jpg",
      "img/pajeCapri.jpeg",
      "img/alegoriaRitualCapri.jpg",
      "img/capir.jpg",
      "img/toadaCapri.jpeg",
      "img/povosCapri.jpeg",
      "img/tuxauaCapri.jpg",
      "img/alegoriaRitualCapri.jpg",
      "img/alegoriaItem21.jpeg",
      "img/alegoriaItem21.jpeg",
      "img/vaqueiradaCapri.jpg",
      "img/galeraCapri.jpeg",
      "img/coreografiaCapri.jpg",
      "img/alegoriaItem21.jpeg"
    ],
    nomes: [
      "Edmundo Oran",
      "Patrick Araújo",
      "Agrupamento de percussão",
      "Marcela Marialva",
      "Caetano Medeiros",
      "Valentina Cid",
      "Cleise Simas",
      "Marciele Albuquerque",
      "Erick Beltrão",
      "Alegorias, encenações etc.",
      "Alexandre Simas Azevedo",
      "Música, com novo álbum de toadas todos os anos",
      "Agrupamento nativo da Amazônia executado por mais de 160 jovens",
      "Artistas não identificados",
      "Grupo de pessoas, alegoria, entre outros",
      "Construído pelos parintinenses",
      "Representada através das alegorias",
      "Grupo de pessoas (brincantes)",
      "Galera é a plateia que participa",
      "Todos os movimentos de dança durante o espetáculo",
      "O conjunto de tudo, itens individuais, artísticos, entre outros"
    ],
    itens: [
      "Apresentador", "Levantador de toadas", "Marujada", "Porta-Estandarte", "Amo do Boi", "Sinhazinha da Fazenda", "Rainha do Folclore", "Cunhã-Poranga", "Pajé", "Ritual Índigena", "Boi-Bumbá evolução (Tripa do boi)", "Toada", "Povos Índigenas", "Tuxauas", "Figura Típica Regional", "Alegorias", "Lenda Amazônica", "Vaqueirada", "Galera", "Coreografia", "Organização do grupo folclórico"
    ],
    // músicas do player (troque pelos seus arquivos)
    // "capa" é opcional: se não colocar, o card mantém a foto normal
    toadas: [
      { nome: "Até o Tucupi", cantor: "Boi Caprichoso", audio: "audio/AteTucupi.mp3", capa: "img/toadaCapri.jpeg" },
      { nome: "Mothokari", cantor: "Boi Caprichoso", audio: "audio/PajeCapri.mp3", capa: "img/toadaCapri.jpeg" },
      { nome: "Tocaia", cantor: "Boi Caprichoso", audio: "audio/Tocaia.mp3", capa: "img/toadaCapri.jpeg" },
      { nome: "Guerreira das Lutas", cantor: "Boi Caprichoso", audio: "audio/guerreira.mp3", capa: "img/toadaCapri.jpeg" },
      { nome: "Ninguém gosta mais desse boi do que eu", cantor: "Boi Caprichoso", audio: "audio/ngmgosta.mp3", capa: "img/toadaCapri.jpeg" },
      { nome: "Yurupari", cantor: "Boi Caprichoso", audio: "audio/yurupari.mp3", capa: "img/toadaCapri.jpeg" },
      { nome: "Rostinho de Anjo", cantor: "Boi Caprichoso", audio: "audio/rostinho.mp3", capa: "img/toadaCapri.jpeg" },

    ]
  },
  {
    botao: "⭐",
    cor: "#7c0c19",
    corBorda: "#a51125",
    fotos: [
      "img/apresentadorGara.jpg",
      "img/levantadorGara.jpg",
      "img/batucadaGara.JPEG",
      "img/portaGara.jpeg",
      "img/amoGara.webp",
      "img/sinhazinhaGara.jpg",
      "img/rainhaGara.jpeg",
      "img/cunhaGara.jpg",
      "img/pajeGara.jpg",
      "img/AlegoriaRitualGara.jpg",
      "img/BoiGara.webp",
      "img/toadaGara.jpeg",
      "img/povosGara.webp",
      "img/tuxauaGara.jpg",
      "img/AlegoriaRitualGara.jpg",
      "img/alegoriaitem21Gara.jpg",
      "img/alegoriaitem21Gara.jpg",
      "img/vaqueiradaGara.jpg",
      "img/galeraGara.jpg",
      "img/coreografia.webp",
      "img/alegoriaitem21Gara.jpg"
    ],
    nomes: [
      "Israel Paulain",
      "David Assayag",
      "Agrupamento de percussão",
      "Jeveny Mendonça",
      "João Paulo Faria",
      "Raíra Lins",
      "Lívia Christina",
      "Isabelle Nogueira",
      "Adriano Paketá",
      "Alegorias, encenações etc.",
      "Denildo Piçanã",
      "Música, com novo álbum de toadas todos os anos",
      "Agrupamento nativo da Amazônia executado por mais de 160 jovens",
      "Artistas não identificados",
      "Grupo de pessoas",
      "Construído pelos parintinenses",
      "Representada através das alegorias",
      "Grupo de pessoas (brincantes)",
      "Galera é a plateia que participa",
      "Todos os movimentos de dança durante o espetáculo",
      "O conjunto de tudo, itens individuais, artísticos, entre outros"
    ],
    itens: [
      "Apresentador", "Levantador de toadas", "Batucada", "Porta-Estandarte", "Amo do Boi", "Sinhazinha da Fazenda", "Rainha do Folclore", "Cunhã-Poranga", "Pajé", "Ritual Índigena", "Boi-Bumbá evolução (Tripa do boi)", "Toada", "Povos Índigenas", "Tuxauas", "Figura Típica Regional", "Alegorias", "Lenda Amazônica", "Vaqueirada", "Galera", "Coreografia", "Organização do grupo folclórico"
    ],
    toadas: [
      { nome: "Miscigenação", cantor: "Boi Garantido", audio: "audio/miscigenacao.mp3", capa: "img/toadaGara.jpeg" },
      { nome: "ISA-A-BELA", cantor: "Boi Garantido", audio: "audio/isabela.mp3", capa: "img/toadaGara.jpeg" },
      { nome: "O-báia", cantor: "Boi Garantido", audio: "audio/obaia.mp3", capa: "img/toadaGara.jpeg" },
      { nome: "A mais bela sinhazinha", cantor: "Boi Garantido", audio: "audio/SinhaGara.mp3", capa: "img/toadaGara.jpeg" },
      
    ]
  }
];

let temaAtual = 0;
let indice = 0;

const foto = document.querySelector(".foto");
const item = document.getElementById("item");
const nome = document.getElementById("nome");
const botao = document.getElementById("botao");
const boxBolinhas = document.getElementById("bolinhas");

/* ----- elementos do player ----- */

const player = document.getElementById("player");
const audio = document.getElementById("main-audio");

const playBtn = document.getElementById("play-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");

const currentTime = document.getElementById("current-time");
const duration = document.getElementById("duration");

const musicName = document.getElementById("music-name");
const musicArtist = document.getElementById("music-artist");
const infoMusica = document.getElementById("info-musica");

let musicaAtual = 0;
let toadaCarregada = false;

/* ----- funções do player ----- */

function formatarTempo(tempo) {
  const minutos = Math.floor(tempo / 60);
  const segundos = Math.floor(tempo % 60).toString().padStart(2, "0");
  return `${minutos}:${segundos}`;
}

function carregarMusica(i) {
  const musica = temas[temaAtual].toadas[i];

  musicName.textContent = musica.nome;
  musicArtist.textContent = musica.cantor;

  audio.src = musica.audio;

  progress.style.width = "0%";
  currentTime.textContent = "0:00";
  duration.textContent = "0:00";

  // se a toada tiver capa, ela vira a foto do card
  if (musica.capa) {
    foto.style.backgroundImage = `url("${musica.capa}")`;
  }

  audio.load();
}

async function tocarMusica() {
  try {
    await audio.play();
    playBtn.classList.remove("ri-play-circle-fill");
    playBtn.classList.add("ri-pause-circle-fill");
  } catch (erro) {
    console.error("Erro ao reproduzir:", erro);
  }
}

function pausarMusica() {
  audio.pause();
  playBtn.classList.remove("ri-pause-circle-fill");
  playBtn.classList.add("ri-play-circle-fill");
}

async function trocarMusica(i) {
  const elementos = [infoMusica, progressContainer];

  elementos.forEach(el => el.classList.add("trocando-musica"));
  await new Promise(resolve => setTimeout(resolve, 400));

  musicaAtual = i;
  carregarMusica(musicaAtual);

  elementos.forEach(el => el.classList.remove("trocando-musica"));
}

async function proximaMusica() {
  const total = temas[temaAtual].toadas.length;
  await trocarMusica((musicaAtual + 1) % total);
  tocarMusica();
}

async function musicaAnterior() {
  const total = temas[temaAtual].toadas.length;
  await trocarMusica((musicaAtual - 1 + total) % total);
  tocarMusica();
}

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    tocarMusica();
  } else {
    pausarMusica();
  }
});

nextBtn.addEventListener("click", proximaMusica);
prevBtn.addEventListener("click", musicaAnterior);

audio.addEventListener("loadedmetadata", () => {
  duration.textContent = formatarTempo(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;

  const porcentagem = (audio.currentTime / audio.duration) * 100;
  progress.style.width = `${porcentagem}%`;
  currentTime.textContent = formatarTempo(audio.currentTime);
});

progressContainer.addEventListener("click", (event) => {
  if (!audio.duration) return;

  const area = progressContainer.getBoundingClientRect();
  const porcentagem = (event.clientX - area.left) / area.width;
  audio.currentTime = porcentagem * audio.duration;
});

audio.addEventListener("ended", () => {
  playBtn.classList.remove("ri-pause-circle-fill");
  playBtn.classList.add("ri-play-circle-fill");
});

/* ----- funções dos cards ----- */

function criarBolinhas() {
  boxBolinhas.innerHTML = "";

  temas[temaAtual].fotos.forEach((_, i) => {
    const b = document.createElement("button");
    b.className = "bolinha";
    b.setAttribute("aria-label", "Ir para o card " + (i + 1));
    b.addEventListener("click", () => {
      indice = i;
      mostrar();
    });
    boxBolinhas.appendChild(b);
  });
}

function mostrar() {
  const t = temas[temaAtual];

  foto.style.backgroundImage = `url("${t.fotos[indice]}")`;
  item.textContent = t.itens[indice];
  nome.textContent = t.nomes[indice];

  [...boxBolinhas.children].forEach((b, i) => {
    b.classList.toggle("ativa", i === indice);
  });

  // player só aparece no card "Toada"
  const ehToada = t.itens[indice] === "Toada";
  player.classList.toggle("ativo", ehToada);

  if (ehToada) {
    if (!toadaCarregada) {
      carregarMusica(musicaAtual);
      toadaCarregada = true;
    } else if (t.toadas[musicaAtual].capa) {
      foto.style.backgroundImage = `url("${t.toadas[musicaAtual].capa}")`;
    }
  } else {
    pausarMusica();
  }
}

function aplicarTema() {
  const t = temas[temaAtual];

  document.documentElement.style.setProperty("--cor", t.cor);
  document.documentElement.style.setProperty("--cor-borda", t.corBorda);
  botao.textContent = t.botao;

  // troca de tema: para a música e recomeça a lista
  pausarMusica();
  musicaAtual = 0;
  toadaCarregada = false;

  indice = 0;
  criarBolinhas();
  mostrar();
}

document.getElementById("proximo").addEventListener("click", () => {
  indice = (indice + 1) % temas[temaAtual].fotos.length;
  mostrar();
});

document.getElementById("anterior").addEventListener("click", () => {
  const total = temas[temaAtual].fotos.length;
  indice = (indice - 1 + total) % total;
  mostrar();
});

botao.addEventListener("click", () => {
  temaAtual = (temaAtual + 1) % temas.length;
  aplicarTema();
});

aplicarTema();

/* ===== pag7: galeria com foco ===== */

const pag7 = document.getElementById("pag7");
const fotosPag7 = document.querySelectorAll("#pag7 .foto-item");

function limparFoco() {
  pag7.classList.remove("tem-foco");
  fotosPag7.forEach(f => f.classList.remove("foco"));
}

fotosPag7.forEach(f => {
  f.addEventListener("click", () => {
    // clicar na que já está em foco desfaz o foco
    if (f.classList.contains("foco")) {
      limparFoco();
      return;
    }

    fotosPag7.forEach(outra => outra.classList.remove("foco"));
    f.classList.add("foco");
    pag7.classList.add("tem-foco");
  });
});

// Esc também volta ao normal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") limparFoco();
});

/* ===== pag8: player + letra ===== */

(() => {
  const pag8 = document.getElementById("pag8");

  const audio = document.getElementById("p8-audio");

  const playBtn = document.getElementById("p8-play");
  const prevBtn = document.getElementById("p8-prev");
  const nextBtn = document.getElementById("p8-next");

  const progress = document.getElementById("p8-progress");
  const progressContainer = document.getElementById("p8-progress-container");

  const currentTime = document.getElementById("p8-current");
  const duration = document.getElementById("p8-duration");

  const musicName = document.getElementById("p8-nome");
  const musicArtist = document.getElementById("p8-cantor");
  const capa = document.getElementById("p8-capa");

  const trechoEl = document.getElementById("p8-trecho");

  const musicas = [
    {
      nome: "Lamento da raça",
      cantor: "Boi Garantido",
      audio: "audio/lamento.mp3",
      capa: "img/toadaGara.jpeg",
      cor: "#7c0c19",
      trecho: `O índio chorou
O branco chorou
Todo mundo está chorando
A amazônia está queimando
Ai, ai, que dor
Ai, ai, que horror

Lá se vai a saracura correndo dessa quentura
E não vai mais voltar
Lá se vai onça-pintada fugindo dessa queimada
E não vai mais voltar
Lá se vai a macacada junto com a passarada
Para nunca mais voltar
Para nunca mais, nunca mais voltar`
    },
    {
      nome: "Amazônia de Pé",
      cantor: "Boi Caprichoso",
      audio: "audio/AmazoniadePe.mp3",
      capa: "img/toadaCapri.jpeg",
      cor: "#062a77",
      trecho: `A cobra grande agoniza no Sol escaldante
E o curumim caminha há mais de uma hora em busca de água
A fumaça acinzenta o céu
E a única fonte de água são as lágrimas ao ver sem nada o espinhel
A ganância te envenenará
E o meu Boi Caprichoso agora é bandeira, é povo fazendo a luta ecoar`
    },
    {
      nome: "A vida depende da vida",
      cantor: "Boi Garantido",
      audio: "audio/AvidaDepende.mp3",
      capa: "img/toadaGara.jpeg",
      cor: "#7c0c19",
      trecho: `Não deixe o meu rio secar
Agonizar e morrer
O que será deste mundo
Se o rio e a mata desaparecer

Não eu não vou devastar
Meu filho precisa crescer
A Vida Depende Da Vida
Pra sobreviver`
    },
    {
      nome: "Terra: Nosso corpo, Nosso espírito",
      cantor: "Boi Caprichoso",
      audio: "audio/terranosso.mp3",
      capa: "img/toadaCapri.jpeg",
      cor: "#062a77",
      trecho: `Nossa terra está doente
Enfermidade recorrente
E junto adoece a fauna e a flora
A cosmologia, o mito dos povos tradicionais
Herança dos nossos ancestrais
Virando pó pelo poder da ganância
A procura de minerais

Terra mãe, no colo de mãe
Tem cura de mãe
Perder nossa terra
É perder nossa mãe`
    }
  ];

  let musicaAtual = 0;

  function mostrarTrecho(texto) {
  trechoEl.innerHTML = "";

  (texto || "Cole aqui o trecho da letra.")
    .split("\n")
    .forEach((linha, i) => {
      const span = document.createElement("span");
      span.className = "p8-linha";
      span.textContent = linha;
      span.style.animationDelay = `${i * 0.35}s`;
      trechoEl.appendChild(span);
    });
}

  function carregarMusica(index) {
    const musica = musicas[index];

    musicName.textContent = musica.nome;
    musicArtist.textContent = musica.cantor;
    mostrarTrecho(musica.trecho);

    audio.src = musica.audio;

    capa.style.backgroundImage = `url("${musica.capa}")`;
    pag8.style.backgroundColor = musica.cor;

    progress.style.width = "0%";
    currentTime.textContent = "0:00";
    duration.textContent = "0:00";

    audio.load();
  }

  function formatarTempo(tempo) {
    const minutos = Math.floor(tempo / 60);
    const segundos = Math.floor(tempo % 60).toString().padStart(2, "0");
    return `${minutos}:${segundos}`;
  }

  async function tocarMusica() {
    try {
      await audio.play();
      playBtn.classList.remove("ri-play-circle-fill");
      playBtn.classList.add("ri-pause-circle-fill");
    } catch (erro) {
      console.error("Erro ao reproduzir:", erro);
    }
  }

  function pausarMusica() {
    audio.pause();
    playBtn.classList.remove("ri-pause-circle-fill");
    playBtn.classList.add("ri-play-circle-fill");
  }

  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      tocarMusica();
    } else {
      pausarMusica();
    }
  });

  audio.addEventListener("loadedmetadata", () => {
    duration.textContent = formatarTempo(audio.duration);
  });

  audio.addEventListener("timeupdate", () => {
    if (!audio.duration) return;

    const porcentagem = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${porcentagem}%`;
    currentTime.textContent = formatarTempo(audio.currentTime);
  });

  progressContainer.addEventListener("click", (event) => {
    if (!audio.duration) return;

    const area = progressContainer.getBoundingClientRect();
    const porcentagem = (event.clientX - area.left) / area.width;
    audio.currentTime = porcentagem * audio.duration;
  });

  async function trocarMusica(index) {
    const elementos = [capa, musicName, musicArtist, progressContainer, trechoEl];

    elementos.forEach(el => el.classList.add("p8-trocando"));
    await new Promise(resolve => setTimeout(resolve, 400));

    musicaAtual = index;
    carregarMusica(musicaAtual);

    elementos.forEach(el => el.classList.remove("p8-trocando"));
  }

  async function proximaMusica() {
    await trocarMusica((musicaAtual + 1) % musicas.length);
    tocarMusica();
  }

  async function musicaAnterior() {
    await trocarMusica((musicaAtual - 1 + musicas.length) % musicas.length);
    tocarMusica();
  }

  nextBtn.addEventListener("click", proximaMusica);
  prevBtn.addEventListener("click", musicaAnterior);

  // ao terminar, passa para a próxima automaticamente
  audio.addEventListener("ended", proximaMusica);

  carregarMusica(musicaAtual);
})();

/* ===== pag9: pausar vídeo ao sair da tela ===== */

/* ===== pag9: vários vídeos ===== */

(() => {
  // Coloque aqui o código de cada vídeo do YouTube
  // (a parte depois de "watch?v=" ou de "youtu.be/")
  const videos = [
    { id: "0xjZyBOSgsI", titulo: "Vídeo 1" },
    { id: "2X6gwbS4REI", titulo: "Vídeo 2" },
  ];

  const player = document.getElementById("video-principal");
  const lista = document.getElementById("video-lista");

  function escolher(i) {
    player.src = `https://www.youtube.com/embed/${videos[i].id}`;
    player.title = videos[i].titulo;

    [...lista.children].forEach((b, n) => {
      b.classList.toggle("ativo", n === i);
    });
  }

  videos.forEach((v, i) => {
    const b = document.createElement("button");
    b.className = "video-mini";
    b.setAttribute("aria-label", "Assistir: " + v.titulo);
    b.innerHTML = `<img src="https://img.youtube.com/vi/${v.id}/mqdefault.jpg" alt="${v.titulo}" loading="lazy">`;
    b.addEventListener("click", () => escolher(i));
    lista.appendChild(b);
  });

  escolher(0);
})();