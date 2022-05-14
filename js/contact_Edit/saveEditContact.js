const saveBtn = document.querySelector('.save');

const closePopupEditForm = async (editedContact) => {
  clearAllErrorsEditForm();
  await hidePopupFormToEdit(editedContact);
  await updateMainPage();
}

const showSaveAndEditDate = (id) => {
  saveBtn.style.display = 'block';
  saveBtn.addEventListener('click', async () => {
    await checkInputFormEditContact(id);
    await showModificationDate(id);
  });
}

const hideSaveBtn = () => {
  saveBtn.style.display = 'none';
}
