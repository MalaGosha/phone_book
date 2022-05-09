const saveBtn = document.querySelector('.save');

const saveChangeInEditContact = () => {
  updateHtml();
  backToMainPage();
  clearAllErrorsEditForm();
  refreshMainPage();
}

const showSaveBtn = () => {
  saveBtn.style.display = 'block';
  saveBtn.addEventListener('click', checkInputFormEditContact);
}
