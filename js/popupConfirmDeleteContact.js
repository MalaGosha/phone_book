const popupConfirmDelete = document.querySelector('.popup_confirmDelete');
const deleteBtnConfirm = document.querySelector('.confirm');

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
  } else {
    showError();
  }
  inputConfirm.addEventListener('click', clearError);
}

deleteBtnConfirm.addEventListener('click', checkConfirm);

overlay.addEventListener('click', event => {
  popupConfirmDelete.style.display = 'none';
  popupDeleteContact.style.display = 'block';
  overlay.style.display = 'block';
})
