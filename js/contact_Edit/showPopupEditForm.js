const popupEdit = document.querySelector('.popup_edit');

const showBackBtn = () => {
  const backBtn = document.querySelector('.back');
  backBtn.addEventListener('click', async () => {
    hidePopupFormToEdit();
    await updateMainPage();
  });
}

const showPopupFormEdit = () => {
  popupEdit.style.display = 'block';
  saveBtn.style.display = 'none';
  overlay.style.display = 'block';
  clearAllErrorsEditForm();
  showBackBtn();
}

const listenerToContact = () => {
  const listAreaContacts = document.querySelectorAll('.area_contact');
  listAreaContacts.forEach(areaContact => {
    areaContact.addEventListener('click', async () => {
      showPopupFormEdit();
      //getInputsToEdit(areaContact);
      await writeDataToPopupEditForm(areaContact);
    })
  })
}
