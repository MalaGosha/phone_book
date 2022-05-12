const saveBtn = document.querySelector('.save');

const saveChangeInEditContact = () => {
  clearAllErrorsEditForm();
  updateHtml();
  backToMainPage();
  prepareContactToEdit();
}

const showSaveBtnAndEditDate = () => {
  saveBtn.style.display = 'block';
  saveBtn.addEventListener('click', () => {
    checkInputFormEditContact();
    showModificationDate();
  });
}

const hideSaveBtn = () => {
  saveBtn.style.display = 'none';
}
