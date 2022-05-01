const popupDeleteContact = document.querySelector('.popup_deleteContact');
const deleteContactBtn = document.querySelector('.delete');

const showPopupDeleteContact = () => {
  overlay.style.display = 'block';
  popupDeleteContact.style.display = 'block';
  chooseContactToDelete();
}

deleteContactBtn.addEventListener('click', showPopupDeleteContact);
