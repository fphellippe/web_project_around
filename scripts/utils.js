export function openImagePopup(link, name) {
  const popup = document.querySelector('.popup_type_image');
  const popupImage = popup.querySelector('.popup__image');
  const popupCaption = popup.querySelector('.popup__caption');

  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;

  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupOnEsc);
}

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupOnEsc);
}

export function closePopupOnEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    if (openedPopup) closePopup(openedPopup);
  }
}
