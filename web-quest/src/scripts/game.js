const cardBoard = document.querySelector("#cardboard");
const images = [
    'alcool.jpg',
    'cumprimento.jpeg',
    'enfermeira.jpg',
    'mascara.jpg',
    'protetor.jpg',
    'vacina.jpg',
];

let cardHTML = '';

images.forEach(img => {
    cardHTML += 
   `<div class="memory-card" data-card=${img}">
    <img class="front-face" src="../assets/images/${img}">
    <img class="back-face" src="../assets/images/virus.jpg">
   </div>`
   
})

cardBoard.innerHTML = cardHTML + cardHTML

// Fim da renderização HTML

const cards = document.querySelectorAll('.memory-card');
let firstCard, secondCard;
let lockCard = false;

function flipCard() {
    if (lockCard) return false;
    this.classList.add("flip")

    if (!firstCard) {
        firstCard = this;

        return false
    }

    secondCard = this;

    checkForMatch()
}

function checkForMatch() {
    let isMatch = firstCard.dataset.card === secondCard.dataset.card;

    !isMatch ? disableCards() : resetCards(isMatch)
}

function disableCards() {
    lockCard = true

    setTimeout(() => {
        firstCard.classList.remove("flip")
        secondCard.classList.remove("flip")

        resetCards()
    }, 3000)
}

(function shuffle() {
    cards.forEach( card => {
        let rand = Math.floor(Math.random() * 12);
        card.style.order = rand
    })
}) ()

function resetCards(isMatch = false) {
    if(isMatch) {
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)
    }
    firstCard = null
    secondCard = null
    lockCard = false
}

cards.forEach(card => card.addEventListener("click", flipCard))