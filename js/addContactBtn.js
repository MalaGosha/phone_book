const addContactBtn = document.querySelector('.add');
const popupAddContact = document.querySelector('.popup_addContact');
const overlay = document.querySelector('.overlay');

const showPopupAddContact = () => {
  popupAddContact.style.display = 'block';
  overlay.style.display = 'block';
}

addContactBtn.addEventListener('click', showPopupAddContact);

