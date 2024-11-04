// Definição dos cartões iniciais com nome e link da imagem
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

// Função para criar um cartão com base no template
function createCard(card) {
    const cardTemplate = document.querySelector("#element-template").content;
    const cardElement = cardTemplate.querySelector(".elements__element").cloneNode(true);
    const cardImage = cardElement.querySelector(".elements__element-image");
    const cardTitle = cardElement.querySelector(".elements__element-title");

    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardTitle.textContent = card.name;

    return cardElement;
}

// Seleciona o contêiner onde os cartões serão adicionados
const elementsContainer = document.querySelector(".elements");

// Função para renderizar os cartões iniciais
function renderInitialCards() {
    initialCards.forEach((card) => {
        const newCard = createCard(card);
        elementsContainer.appendChild(newCard);
    });
}

// Função para adicionar um novo cartão a partir de um formulário
function addCard(event) {
    event.preventDefault();

    const inputTitle = document.querySelector("#title"); // Campo para o título
    const inputUrl = document.querySelector("#url"); // Campo para o link da imagem

    if (inputTitle.value && inputUrl.value) {
        const newCardData = {
            name: inputTitle.value,
            link: inputUrl.value
        };

        const newCard = createCard(newCardData);
        elementsContainer.prepend(newCard);

        inputTitle.value = "";
        inputUrl.value = "";
    }
}

// Seleciona o formulário e configura o evento de submit para adicionar o cartão
const form = document.querySelector(".popup__form");
form.addEventListener("submit", addCard);

// Renderiza os cartões iniciais ao carregar a página
renderInitialCards();