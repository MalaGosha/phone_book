const popupDeleteContact = document.querySelector('.popup_deleteContact');
const deleteContactBtn = document.querySelector('.delete');
const popupEmptyBook = document.querySelector('.empty_phoneBook');

const showPopupAboutEmptyPhoneBook = () => {
  popupEmptyBook.style.display = 'block';
  overlay.style.display = 'block';
  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    popupEmptyBook.style.display = 'none';
  })
}

const showPopupDeleteContact = async () => {
  overlay.style.display = 'block';
  popupDeleteContact.style.display = 'block';
  await chooseContactToDelete();
}

const hidePopupDeleteContact = () => {
  overlay.style.display = 'none';
  popupDeleteContact.style.display = 'none';
  showPopupAboutEmptyPhoneBook();
}

const checkEmptyAreaContacts = () => {
  const areaContacts = document.querySelector('.area_contacts');
  if (areaContacts.innerHTML === '') {
    hidePopupDeleteContact();
  } else {
    showPopupDeleteContact();
  }
}

deleteContactBtn.addEventListener('click', checkEmptyAreaContacts);
