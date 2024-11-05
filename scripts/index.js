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
    name: "Parque Nacional da Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

// Seleciona o pop-up e seus elementos
const popupProfile = document.querySelector(".popup-profile");
const editButton = document.querySelector(".profile__info-button-edit"); // Botão para abrir o pop-up
const closeButton = document.querySelector(".popup__form-button-close"); // Botão "X" para fechar o pop-up sem salvar
const nameInput = document.querySelector("#name"); // Campo de input do nome
const profissionInput = document.querySelector("#profission"); // Campo de input do "Sobre mim" ou "Profissão"

// Variáveis para armazenar o estado original do perfil antes de edição
let originalName = "";
let originalProfession = "";

// Função para abrir o pop-up
function openPopup() {
    // Salva os valores atuais do perfil antes da edição
    originalName = document.querySelector(".profile__info-name").textContent;
    originalProfession = document.querySelector(".profile__info-profession").textContent;

    // Preenche os campos do pop-up com os valores atuais
    nameInput.value = originalName;
    profissionInput.value = originalProfession;

    // Abre o pop-up
    popupProfile.classList.add("popup_change_display");
}

// Função para fechar o pop-up sem salvar alterações
function closePopup() {
    // Apenas esconde o pop-up sem alterar os dados do perfil
    popupProfile.classList.remove("popup_change_display");
}

// Evento para abrir o pop-up ao clicar no botão de edição
editButton.addEventListener("click", openPopup);

// Evento para fechar o pop-up ao clicar no botão "X" sem salvar alterações
closeButton.addEventListener("click", closePopup);

// Função para salvar dados do perfil e fechar o pop-up
function saveProfileData(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Seleciona os elementos de nome e profissão no perfil
    const profileName = document.querySelector(".profile__info-name");
    const profileJob = document.querySelector(".profile__info-profession");

    // Atualiza o conteúdo do perfil com os valores dos inputs
    profileName.textContent = nameInput.value;
    profileJob.textContent = profissionInput.value;

    // Fecha o pop-up após salvar os dados
    closePopup();
}

// Vincula a função saveProfileData ao evento submit do formulário de edição de perfil
document.querySelector(".popup__form").addEventListener("submit", saveProfileData);

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