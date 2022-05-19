const hidePopups = () => {
  popupAddContact.style.display = 'none';
  popupDeleteContact.style.display = 'none';
  popupConfirmDelete.style.display = 'none';
  popupEmptyBook.style.display = 'none';
  popupEdit.style.display = 'none';
  overlay.style.display = 'none';
  overlaySecond.style.display = 'none';
}

window.addEventListener('keydown', async event => {
  if (event.key === 'Escape') {
    hidePopups();
    clearInputs();
    let allContacts = await sortAllContactsToForm();
    await updateMainPageWithSortAllContacts(allContacts);
  }
})

overlay.addEventListener('click', async() => {
  closePopupAddContact();
  hidePopups();
  clearInputs();
  let allContacts = await sortAllContactsToForm();
  await updateMainPageWithSortAllContacts(allContacts);
});
