const searchPopup = document.querySelector('.popup');

const getIdContactToDelete = (divContact) => {
  const idContactToDelete = divContact.querySelector('#id');
  console.log('idContact to delete .innerHTML ' + idContactToDelete.innerHTML)
}

const chooseContactToDelete = () => {
  const areaContactDelete = document.querySelectorAll('.area_contactDelete');

  areaContactDelete.forEach(divContact => {
    divContact.addEventListener("click", e => {
      const popupConfirmDelete = document.querySelector('.popup_confirmDelete');
      popupConfirmDelete.style.display = 'block';
      overlay.style.display = 'block';
      console.log('divContact.innerText ' + divContact.innerText);
      console.log('divContact ' + divContact);
      getIdContactToDelete(divContact);
      showNameSurnameToConfirm(divContact);
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

