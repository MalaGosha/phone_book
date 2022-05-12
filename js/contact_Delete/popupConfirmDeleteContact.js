const popupConfirmDelete = document.querySelector('.popup_confirmDelete');
const deleteBtnConfirm = document.querySelector('.confirm');
const escapeBtn = document.querySelector('.escape');

async function checkIdentityOfSurnames() {
  const inputConfirm = document.querySelector('#confirm');
  const deletedId = document.querySelector('#deleted_Id');
  let inputSurname = inputConfirm.value;
  let id = deletedId.innerHTML;
  let contactById = await getContact(id);

  if (inputSurname !== contactById.surname) {
    showErrorCheckConfirm();
  } else {
    popupConfirmDelete.style.display = 'none';
    await chooseContactToDelete();

    // w tym miejscu funkcja API usuwająca kontakt
    await deleteContactFromDB(id);

    updateHtml();
    closePopupConfirm();
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

deleteBtnConfirm.addEventListener('click', checkIdentityOfSurnames);
escapeBtn.addEventListener('click', closePopupConfirm);




