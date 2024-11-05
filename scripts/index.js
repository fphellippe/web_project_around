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
const profileName = document.querySelector(".profile__info-name"); // Elemento de texto do nome no perfil
const profileJob = document.querySelector(".profile__info-profession"); // Elemento de texto da profissão no perfil

// Função para abrir o pop-up e preencher os campos com os valores atuais
function openPopup() {
    // Preenche os campos de entrada com os valores atuais do perfil
    nameInput.value = profileName.textContent;
    profissionInput.value = profileJob.textContent;
    // Adiciona a classe para exibir o pop-up
    popupProfile.classList.add("popup_opened");
}

// Função para fechar o pop-up sem salvar
function closePopup() {
    popupProfile.classList.remove("popup_opened");
}

// Função para salvar as alterações e atualizar o perfil
function saveProfileData(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    // Atualiza os elementos de texto do perfil com os valores dos inputs
    profileName.textContent = nameInput.value;
    profileJob.textContent = profissionInput.value;
    // Fecha o pop-up após salvar
    closePopup();
}

// Eventos para abrir e fechar o pop-up
editButton.addEventListener("click", openPopup); // Abre o pop-up ao clicar em "Editar"
closeButton.addEventListener("click", closePopup); // Fecha o pop-up ao clicar no "X"
document.querySelector(".popup__form").addEventListener("submit", saveProfileData); // Salva os dados e fecha o pop-up ao clicar em "Salvar"

// Função para criar um cartão com base no template
function createCard(card) {
    const cardTemplate = document.querySelector("#element-template").content;
    const cardElement = cardTemplate.querySelector(".elements__element").cloneNode(true);
    const cardImage = cardElement.querySelector(".elements__element-image");
    const cardTitle = cardElement.querySelector(".elements__element-title");
    const likeButton = cardElement.querySelector(".elements__element-button-heart");

    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardTitle.textContent = card.name;

    // Adiciona um evento de clique para o botão de curtir, alternando a classe para o estado ativo
    likeButton.addEventListener("click", () => {
        likeButton.classList.toggle("elements__element-button-heart_active");
    });

    return cardElement;
}

// Seleciona o contêiner onde os cartões serão adicionados
const elementsContainer = document.querySelector(".elements");

// Função para renderizar os cartões iniciais
function renderInitialCards() {
    if (initialCards.length === 0) {
        elementsContainer.textContent = "Ainda não há cartões";
    } else {
        initialCards.forEach((card) => {
            const newCard = createCard(card);
            elementsContainer.appendChild(newCard);
        });
    }
}

// Renderiza os cartões iniciais ao carregar a página
renderInitialCards();