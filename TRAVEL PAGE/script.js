const data = [
  // Dados já fornecidos.
];

const _ = (id) => document.getElementById(id);
const cards = data
  .map(
    (i, index) =>
      `<div class="card" id="card${index}" style="background-image:url(${i.image})"  ></div>`
  )
  .join("");

const cardContents = data
  .map(
    (i, index) => `<div class="card-content" id="card-content-${index}">
<div class="content-start"></div>
<div class="content-place">${i.place}</div>
<div class="content-title-1">${i.title}</div>
<div class="content-title-2">${i.title2}</div>

</div>`
  )
  .join("");

const sildeNumbers = data
  .map(
    (_, index) =>
      `<div class="item" id="slide-item-${index}" >${index + 1}</div>`
  )
  .join("");
_("demo").innerHTML = cards + cardContents;
_("slide-numbers").innerHTML = sildeNumbers;

const range = (n) =>
  Array(n)
    .fill(0)
    .map((i, j) => i + j);
const set = gsap.set;

// Funções auxiliares
function getCard(index) {
  return `#card${index}`;
}
function getCardContent(index) {
  return `#card-content-${index}`;
}
function getSliderItem(index) {
  return `#slide-item-${index}`;
}
function animate(target, duration, properties) {
  return new Promise((resolve) => {
    gsap.to(target, {
      ...properties,
      duration: duration,
      onComplete: resolve,
    });
  });
}

// Código inicial e controle do loop
async function start() {
  try {
    await loadImages();
    init();
  } catch (error) {
    console.error("One or more images failed to load", error);
  }
}

start();
