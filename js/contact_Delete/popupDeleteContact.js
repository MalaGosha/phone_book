const searchPopup = document.querySelector('.popup');
const overlaySecond = document.querySelector('.overlaySecond');

const showPopupConfirmToDelete = () => {
  const popupConfirmDelete = document.querySelector('.popup_confirmDelete');
  popupConfirmDelete.style.display = 'block';
  overlay.style.display = 'block';
  overlaySecond.style.display = 'block';
}

const getIdContactToDelete = (areaContact) => {
  const idContactToDelete = areaContact.querySelector('#id');
  return idContactToDelete.innerHTML;
}

const chooseContactToDelete = () => {
  const areaContactDelete = document.querySelectorAll('.area_contactDelete');

  if(areaContactDelete.length === 0) {
    hidePopupDeleteContact();
  } else {
    areaContactDelete.forEach(areaContact => {
      areaContact.addEventListener("click", e => {
        clearErrorDeleteForm();
        clearInputs();
        showPopupConfirmToDelete();
        let id = getIdContactToDelete(areaContact);
        generateHTMLConfirmContactToDelete(id);

      });
    })
  }
}

const searchContactToDelete = contact => {
  searchContactDelete(contact);
  chooseContactToDelete();
}

searchPopup.addEventListener('keyup', searchContactToDelete);

overlaySecond.addEventListener('click', event => {
  popupConfirmDelete.style.display = 'none';
  overlaySecond.style.display = 'none';
  popupDeleteContact.style.display = 'block';
  overlay.style.display = 'block';
})
