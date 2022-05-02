const searchPopup = document.querySelector('.popup');

const getIdContactToDelete = (divContact) => {
  const idContactToDelete = divContact.querySelector('#id');
  let id = idContactToDelete.innerHTML;
  generateHTMLConfirmContactToDelete(id);
}

const chooseContactToDelete = () => {
  const areaContactDelete = document.querySelectorAll('.area_contactDelete');

  areaContactDelete.forEach(divContact => {
    divContact.addEventListener("click", e => {
      const popupConfirmDelete = document.querySelector('.popup_confirmDelete');
      popupConfirmDelete.style.display = 'block';
      overlay.style.display = 'block';
      getIdContactToDelete(divContact);
      clearError();
      clearInput();
    });
  })
}

const searchContactToDelete = contact => {
  searchContact(contact);
  chooseContactToDelete();
  getIdContactToDelete();
}


searchPopup.addEventListener('keyup', searchContactToDelete);

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    popupDeleteContact.style.display = 'none';
    overlay.style.display = 'none';
    popupConfirmDelete.style.display = 'none';
  }
})

