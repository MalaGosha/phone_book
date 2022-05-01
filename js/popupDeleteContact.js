const searchPopup = document.querySelector('.popup');

const chooseContactToDelete = () => {
  const areaContactDelete = document.querySelectorAll('.area_contactDelete');
  areaContactDelete.forEach(div => {
    div.addEventListener("click", e => {
      const popupConfirmDelete = document.querySelector('.popup_confirmDelete');
      popupConfirmDelete.style.display = 'block';
      overlay.style.display = 'block';
    });
  })
}

const searchContactToDelete = contact => {
  searchContact(contact);
  chooseContactToDelete();
}


searchPopup.addEventListener('keyup', searchContactToDelete);

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    popupDeleteContact.style.display = 'none';
    overlay.style.display = 'none';
    popupConfirmDelete.style.display = 'none';
  }
})


