const popupConfirmDelete = document.querySelector('.popup_confirmDelete');
const deleteBtnConfirm = document.querySelector('.confirm');
const escapeBtn = document.querySelector('.escape');

const checkConfirm = () => {
  const inputConfirm = document.querySelector('#confirm');
  const deletedId = document.querySelector('#deleted_Id');
  let inputSurname = inputConfirm.value;
  let id = deletedId.innerHTML;
  let contactById = getContactById(id);

  if (inputSurname === contactById.surname) {
    deleteContactById(id);
    popupConfirmDelete.style.display = 'none';
    chooseContactToDelete();
    closePopupConfirm()
  } else {
    showError();
  }
  inputConfirm.addEventListener('click', clearError);
}

const closePopupConfirm = () => {
  popupConfirmDelete.style.display = 'none';
  overlay2.style.display = 'none';
  overlay.style.display = 'play';
  const inputConfirm = document.querySelector('#confirm');
  inputConfirm.innerHTML = '';
}

deleteBtnConfirm.addEventListener('click', checkConfirm);
escapeBtn.addEventListener('click', closePopupConfirm)

overlay2.addEventListener('click', event => {
  popupConfirmDelete.style.display = 'none';
  overlay2.style.display = 'block';
  popupDeleteContact.style.display = 'block';
  overlay.style.display = 'block';
})


