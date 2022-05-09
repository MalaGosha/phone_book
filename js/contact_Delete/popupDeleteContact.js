const searchPopup = document.querySelector('.popup');
const overlay2 = document.querySelector('.overlay2');

const getIdContactToDelete = (divContact) => {
  const idContactToDelete = divContact.querySelector('#id');
  let id = idContactToDelete.innerHTML;
  generateHTMLConfirmContactToDelete(id);
}

const chooseContactToDelete = () => {
  const areaContactDelete = document.querySelectorAll('.area_contactDelete');

  if(areaContactDelete.length === 0) {
    noShowPopupDeleteContact();
  } else {
    areaContactDelete.forEach(divContact => {
      divContact.addEventListener("click", e => {
        const popupConfirmDelete = document.querySelector('.popup_confirmDelete');
        popupConfirmDelete.style.display = 'block';
        overlay.style.display = 'block';
        overlay2.style.display = 'block';
        getIdContactToDelete(divContact);
        clearErrorDeleteForm();
        clearInputs();
      });
    })
  }
}

const searchContactToDelete = contact => {
  searchContactDelete(contact);
  chooseContactToDelete();
}

searchPopup.addEventListener('keyup', searchContactToDelete);

overlay2.addEventListener('click', event => {
  popupConfirmDelete.style.display = 'none';
  overlay2.style.display = 'block';
  popupDeleteContact.style.display = 'block';
  overlay.style.display = 'block';
})
