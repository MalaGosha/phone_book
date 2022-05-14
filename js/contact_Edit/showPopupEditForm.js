let id;
const popupEdit = document.querySelector('.popup_edit');

const showBackBtn = (editList) => {
  const backBtn = document.querySelector('.back');
  backBtn.addEventListener('click', () => {
    backToMainPage(editList);
    clearAllErrorsEditForm();
  });
}

const showPopupFormEdit = (editList) => {
  popupEdit.style.display = 'block';
  saveBtn.style.display = 'none';
  overlay.style.display = 'block';
  showBackBtn(editList);
}

const listenersToContact = () => {
  const listAreaContacts = document.querySelectorAll('.area_contact');
  listAreaContacts.forEach(areaContact => {
    areaContact.addEventListener('click', () => {
      let editList = getInputsToEditForm();
      id = getIdContactToEdit(areaContact);
      writeDataToPopup(areaContact);
      noEditForm(editList);
      showPopupFormEdit(editList);
    });
  })
}
