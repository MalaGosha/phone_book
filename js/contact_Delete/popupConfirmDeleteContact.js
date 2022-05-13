const popupConfirmDelete = document.querySelector('.popup_confirmDelete');
const deleteBtnConfirm = document.querySelector('.confirm');
const escapeBtn = document.querySelector('.escape');

function getRecordToDelete() {
  const record = document.querySelector('#deleted_Id');
  return record.innerHTML;
}

async function checkIdentityOfSurnames() {
  const inputConfirm = document.querySelector('#confirmSurname');
  let inputSurname = inputConfirm.value;
  let deletedRecordNumber = getRecordToDelete();
  let id = getIdByRecord(deletedRecordNumber);
  let contact = await getContactById(id);

  if (inputSurname !== contact.surname) {
    showErrorCheckConfirm();
  } else {
    await deleteContactFromDB(id);
    await showPopupDeleteContact();
    closePopupConfirmSurname();
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




