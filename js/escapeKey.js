const hidePopup = () => {
  popupAddContact.style.display = 'none';
  popupDeleteContact.style.display = 'none';
  popupConfirmDelete.style.display = 'none';
  popupEmptyBook.style.display = 'none';
  popupEdit.style.display = 'none';
  overlay.style.display = 'none';
  overlay2.style.display = 'none';
}

window.addEventListener('keydown', async () => {
  if (event.key === 'Escape') {
    hidePopup();
    clearInputs();
    await updateMainPage(); // listenerToEditForm
  }
})
