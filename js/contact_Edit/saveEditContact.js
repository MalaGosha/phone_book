const saveBtn = document.querySelector('.save');

const saveChangeInEditContact = () => {
  clearAllErrorsEditForm();
  showModificationDate();
  updateHtml();
  backToMainPage();
  refreshMainPage();
}

const showSaveBtnAndEditDate = () => {
  saveBtn.style.display = 'block';
  saveBtn.addEventListener('click', checkInputFormEditContact);
}
