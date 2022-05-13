const saveBtn = document.querySelector('.save');

const closePopupEditForm = async (editedContact) => {
  clearAllErrorsEditForm();
  await hidePopupFormToEdit(editedContact);
  await updateMainPage(); // listener to edit
}

const showSaveBtnAndEditDate = (areaContact) => {
  saveBtn.style.display = 'block';
  saveBtn.addEventListener('click', async () => {
    await checkInputFormEditContact(areaContact);
    await showModificationDate(areaContact);
  });
}

const hideSaveBtn = () => {
  saveBtn.style.display = 'none';
}
