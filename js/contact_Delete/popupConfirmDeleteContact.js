const popupConfirmDelete = document.querySelector('.popup_confirmDelete');
const deleteBtnConfirm = document.querySelector('.confirm');
const escapeBtn = document.querySelector('.escape');

async function checkIdentityOfSurnames() {
  const inputConfirm = document.querySelector('#confirmSurname');
  const deletedId = document.querySelector('#deleted_Id');
  let inputSurname = inputConfirm.value;
  let id = deletedId.innerHTML;
  let contactById = await getContactById(id);

  if (inputSurname !== contactById.surname) {
    showErrorCheckConfirm();
  } else {
    await deleteContactFromDB(id);
    await updateMainPage();
    closePopupConfirmSurname();
    await chooseContactToDelete();
  }
  inputConfirm.addEventListener('click', clearErrorDeleteForm);
}

const closePopupConfirmSurname = () => {
  popupConfirmDelete.style.display = 'none';
  overlay2.style.display = 'none';
  overlay.style.display = 'play';
  const inputConfirm = document.querySelector('#confirmSurname');
  inputConfirm.innerHTML = '';
}

deleteBtnConfirm.addEventListener('click', checkIdentityOfSurnames);
escapeBtn.addEventListener('click', closePopupConfirmSurname);




