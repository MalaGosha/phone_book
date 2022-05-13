const popupEdit = document.querySelector('.popup_edit');

const showBackBtn = (editList) => {
  const backBtn = document.querySelector('.back');
  backBtn.addEventListener('click', async () => {
    hidePopupFormToEdit(editList);
    await updateMainPage();
  });
}

const showPopupFormEdit = (editList) => {
  popupEdit.style.display = 'block';
  saveBtn.style.display = 'none';
  overlay.style.display = 'block';
  clearAllErrorsEditForm();
  showBackBtn(editList);
}

const listenerToContact = () => {
  const listAreaContacts = document.querySelectorAll('.area_contact');
  listAreaContacts.forEach(areaContact => {
    areaContact.addEventListener('click', async () => {
      let editList = getInputsToEdit();
      let record = getRecordByContact(areaContact);
      let id = getIdByRecord(record);
      await writeDataToPopupEditForm(id, editList);
      disabledFormEdit(id, editList);
      showPopupFormEdit(editList);
    })
  })
}
