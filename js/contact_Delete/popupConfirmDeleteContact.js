const popupConfirmDelete = document.querySelector('.popup_confirmDelete');
const deleteBtnConfirm = document.querySelector('.confirm');
const escapeBtn = document.querySelector('.escape');

async function checkIdentityOfSurnames() {
  const inputConfirm = document.querySelector('#confirmSurname');
  const deletedId = document.querySelector('#deleted_Id');
  let inputSurname = inputConfirm.value;
  let id = deletedId.innerHTML;
  let contactById = await getContact(id);

  if (inputSurname !== contactById.surname) {
    showErrorCheckConfirm();
  } else {
    popupConfirmDelete.style.display = 'none';
    await deleteContactFromDB(id);
    await updateHtml();
    closePopupConfirm();
    await chooseContactToDelete();
  }
  inputConfirm.addEventListener('click', clearErrorDeleteForm);
}

const closePopupConfirm = () => {
  popupConfirmDelete.style.display = 'none';
  overlay2.style.display = 'none';
  overlay.style.display = 'play';
  const inputConfirm = document.querySelector('#confirmSurname');
  inputConfirm.innerHTML = '';
}

deleteBtnConfirm.addEventListener('click', checkIdentityOfSurnames);
escapeBtn.addEventListener('click', closePopupConfirm);




