const popupDeleteContact = document.querySelector('.popup_deleteContact');
const deleteContactBtn = document.querySelector('.delete');

const showPopupDeleteContact = () => {
  popupDeleteContact.style.display = 'block';
  overlay.style.display = 'block';
  generateHTMLContactToDelete(contactsList);
}

deleteContactBtn.addEventListener('click', showPopupDeleteContact);
