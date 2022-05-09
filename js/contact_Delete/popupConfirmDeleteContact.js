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
    popupConfirmDelete.style.display = 'none';
    deleteContactById(id);
    chooseContactToDelete();
    closePopupConfirm();
  } else {
    showErrorCheckConfirm();
  }
  inputConfirm.addEventListener('click', clearErrorDeleteForm);
}

const closePopupConfirm = () => {
  popupConfirmDelete.style.display = 'none';
  overlay2.style.display = 'none';
  overlay.style.display = 'play';
  const inputConfirm = document.querySelector('#confirm');
  inputConfirm.innerHTML = '';
}

deleteBtnConfirm.addEventListener('click', checkConfirm);
escapeBtn.addEventListener('click', closePopupConfirm);




