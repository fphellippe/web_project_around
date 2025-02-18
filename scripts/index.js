// Selecionando elementos do DOM
const popupProfile = document.querySelector(".popup-profile");
const popupImage = document.querySelector(".popup-image");
const imgFull = document.querySelector(".popup__imgfull");
const openImgFull = document.querySelector(".popup__imgfull-imgbig");
const openImgFullTittle = document.querySelector(".popup__imgfull-tittle");

const editButton = document.querySelector(".profile__info-button-edit");
const addImageButton = document.querySelector(".profile__button"); // Botão para adicionar imagem
const closeProfilePopup = popupProfile.querySelector(".popup__form-button-close");
const closeImagePopup = popupImage.querySelector(".popup__form-button-close");
const closePopupImgFull = imgFull.querySelector(".popup__imgfull-button-close");

const formProfile = document.querySelector(".popup-profile .popup__form");
const formAddImage = document.querySelector(".popup-image .popup__form");

const inputName = formProfile.querySelector("#name");
const inputProfession = formProfile.querySelector("#profession");
const inputTitle = formAddImage.querySelector("#title");
const inputUrl = formAddImage.querySelector("#url");

const profileInfo = document.querySelector(".profile__info-name");
const profileProfession = document.querySelector(".profile__info-profession");
const cards = document.querySelector(".elements");

// Função para abrir pop-ups
function openPopup(popup) {
    popup.classList.add("popup_change_display");
}

// Função para fechar pop-ups
function closePopup(popup) {
    popup.classList.remove("popup_change_display");
}

// Fechar pop-ups ao clicar fora ou pressionar "Esc"
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        document.querySelectorAll(".popup").forEach(closePopup);
    }
});

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("popup")) {
        closePopup(event.target);
    }
});

// Impedir que cliques dentro do contêiner interno do popup fechem o popup
const popupImgFullCard = document.querySelector(".popup__imgfull-card");
popupImgFullCard.addEventListener("click", (event) => {
    event.stopPropagation();
});

// Eventos para abrir e fechar pop-ups
editButton.addEventListener("click", () => openPopup(popupProfile));
addImageButton.addEventListener("click", () => openPopup(popupImage)); // Abre popup de adicionar imagem
closeProfilePopup.addEventListener("click", () => closePopup(popupProfile));
closeImagePopup.addEventListener("click", () => closePopup(popupImage));
closePopupImgFull.addEventListener("click", () => closePopup(imgFull));

// Atualizar perfil no evento submit
function updateProfileInfo(event) {
    event.preventDefault();
    profileInfo.textContent = inputName.value.trim();
    profileProfession.textContent = inputProfession.value.trim();
    closePopup(popupProfile);
}
formProfile.addEventListener("submit", updateProfileInfo);

// Adicionar novo cartão no evento submit
formAddImage.addEventListener("submit", function (event) {
    event.preventDefault();

    if (inputTitle.value.trim() !== "" && inputUrl.value.trim() !== "") {
        const newCard = createCard({
            name: inputTitle.value.trim(),
            link: inputUrl.value.trim(),
        });

        cards.prepend(newCard);
        formAddImage.reset();
        closePopup(popupImage);
    }
});

// Delegação de eventos para botões de like, exclusão e exibição de imagem
cards.addEventListener("click", (event) => {
    // Botão de like: alterna a imagem conforme o estado atual
    if (event.target.classList.contains("elements__element-button-heart")) {
        if (event.target.src.includes("elements__image-heart-disble.png")) {
            event.target.src = "./images/elements__image-heart-active.png";
        } else {
            event.target.src = "./images/elements__image-heart-disble.png";
        }
    }

    // Botão de exclusão
    if (event.target.classList.contains("elements-element-button-trash")) {
        event.target.closest(".elements__element").remove();
    }

    // Exibir imagem em popup
    if (event.target.classList.contains("elements__element-image")) {
        console.log("Expanding image", event.target.src);
        openImgFull.alt = event.target.alt;
        openImgFull.src = event.target.src;
        openImgFullTittle.textContent = event.target.alt;
        openPopup(imgFull);
    }
});

// Lista inicial de cartões
const initialCards = [
    { name: "Vale de Yosemite", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg" },
    { name: "Lago Louise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg" },
    { name: "Montanhas Carecas", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg" },
    { name: "Latemar", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg" },
    { name: "Parque Nacional da Vanoise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg" },
    { name: "Lago di Braies", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg" }
];

// Criar cartão a partir do template
function createCard(card) {
    const cardTemplate = document.querySelector("#element-template").content;
    const elementCard = cardTemplate.querySelector(".elements__element").cloneNode(true);
    const cardTitle = elementCard.querySelector(".elements__element-title");
    const cardImage = elementCard.querySelector(".elements__element-image");
    const trashButton = elementCard.querySelector(".elements-element-button-trash");

    cardTitle.textContent = card.name;
    cardImage.setAttribute("alt", card.name);
    cardImage.setAttribute("src", card.link);

    // Evento de exclusão
    trashButton.addEventListener("click", () => {
        elementCard.remove();
    });

    // Removido: Event listener de exibição da imagem duplicado,
    // pois o listener de delegação no contêiner "cards" já cobre essa funcionalidade

    return elementCard;
}

// Adicionar os cartões iniciais à página
initialCards.forEach((card) => {
    const newCard = createCard(card);
    cards.prepend(newCard);
});