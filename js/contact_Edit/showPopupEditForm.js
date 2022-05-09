const popupEdit = document.querySelector('.popup_edit');

const showBackBtn = () => {
  const backBtn = document.querySelector('.back');
  backBtn.addEventListener('click', () => {
    backToMainPage();
    clearAllErrorsEditForm();
  });
}

const showPopupFormEdit = () => {
  popupEdit.style.display = 'block';
  saveBtn.style.display = 'none';
  overlay.style.display = 'block';
  showBackBtn();
}
