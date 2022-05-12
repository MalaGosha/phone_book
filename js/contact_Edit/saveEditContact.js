const saveBtn = document.querySelector('.save');

const saveChangeInEditContact = async () => {
  clearAllErrorsEditForm();
  await backToMainPage();
  prepareContactToEdit();
}

const showSaveBtnAndEditDate = () => {
  saveBtn.style.display = 'block';
  saveBtn.addEventListener('click', async () => {
    await checkInputFormEditContact();
    await showModificationDate();
  });
}

const hideSaveBtn = () => {
  saveBtn.style.display = 'none';
}
