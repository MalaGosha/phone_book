const popupConfirmDelete = document.querySelector('.popup_confirmDelete');
const deleteBtnConfirm = document.querySelector('.confirm');
const escapeBtn = document.querySelector('.escape');
const inputConfirm = document.querySelector('#confirm');

const checkConfirm = () => {
  inputConfirm.addEventListener('click', clearErrorDeleteForm);
  let inputSurname = inputConfirm.value;
  const deletedId = document.querySelector('#deleted_Id');
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
}

const closePopupConfirm = () => {
  popupConfirmDelete.style.display = 'none';
  overlaySecond.style.display = 'none';
  overlay.style.display = 'block';
  inputConfirm.innerHTML = '';
}

deleteBtnConfirm.addEventListener('click', checkConfirm);
escapeBtn.addEventListener('click', closePopupConfirm);




