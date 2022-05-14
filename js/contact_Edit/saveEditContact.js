const saveBtn = document.querySelector('.save');

const saveChangeInEditContact = (editList) => {
  clearAllErrorsEditForm();
  updateHtml();
  backToMainPage(editList);
}

const showSaveBtnAndEditDate = (editList) => {
  saveBtn.style.display = 'block';
  saveBtn.addEventListener('click', () => {
    checkInputFormEditContact(editList);
    showModificationDate();
  });
}

const hideSaveBtn = () => {
  saveBtn.style.display = 'none';
}
