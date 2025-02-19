export default class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._element.querySelector('.card__like-button').addEventListener('click', () => {
      this._handleLike();
    });

    this._element.querySelector('.card__delete-button').addEventListener('click', () => {
      this._handleDelete();
    });

    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handlePreview();
    });
  }

  _handleLike() {
    this._element.querySelector('.card__like-button').classList.toggle('card__like-button_active');
  }

  _handleDelete() {
    this._element.remove();
    this._element = null;
  }

  _handlePreview() {
    // Função para abrir o modal de imagem
    openImagePopup(this._link, this._name);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.card__title').textContent = this._name;
    const imageElement = this._element.querySelector('.card__image');
    imageElement.src = this._link;
    imageElement.alt = this._name;

    this._setEventListeners();
    return this._element;
  }
}
