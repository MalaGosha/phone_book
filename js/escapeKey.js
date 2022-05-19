const hidePopups = () => {
  popupAddContact.style.display = 'none';
  popupDeleteContact.style.display = 'none';
  popupConfirmDelete.style.display = 'none';
  popupEmptyBook.style.display = 'none';
  popupEdit.style.display = 'none';
  overlay.style.display = 'none';
  overlaySecond.style.display = 'none';
}

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    hidePopups();
    clearInputs();
    listenersToContact();
  }
})


overlay.addEventListener('click', async() => {
  closePopupAddContact();
  hidePopups();
  clearInputs();
});
