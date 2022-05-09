const saveBtn = document.querySelector('.save');

const saveChangeInEditContact = () => {
  clearAllErrorsEditForm();
  updateHtml();
  backToMainPage();
  refreshMainPage();
}

const showSaveBtnAndEditDate = () => {
  saveBtn.style.display = 'block';
  saveBtn.addEventListener('click', () => {
    checkInputFormEditContact();
    showModificationDate();
  });
}
