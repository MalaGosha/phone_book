const saveBtn = document.querySelector('.save');

const closePopupEditForm = async () => {
  clearAllErrorsEditForm();
  await hidePopupFormToEdit();
  await updateMainPage(); // listener to edit
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
