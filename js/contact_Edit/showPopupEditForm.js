const popupEdit = document.querySelector('.popup_edit');

const showBackBtn = (editList) => {
  const backBtn = document.querySelector('.back');
  backBtn.addEventListener('click', async () => {
    hidePopupFormToEdit(editList);
    let allContacts = await sortAllContactsToForm();
    await updateMainPageWithSortAllContacts(allContacts);
  });
}

const showPopupFormEdit = (editList) => {
  popupEdit.style.display = 'block';
  saveBtn.style.display = 'none';
  overlay.style.display = 'block';
  clearAllErrorsEditForm();
  showBackBtn(editList);
}

const listenersToContacts = () => {
  const areaContactList = document.querySelectorAll('.area_contact');
  areaContactList.forEach(areaContact => {
    areaContact.addEventListener('click', async () => {
      let editList = getInputsToEdit();
      let record = getRecordByAreaContact(areaContact);
      let id = getIdByRecord(record);
      await writeDataToPopupEditForm(id, editList);
      disabledFormEdit(id, editList);
      showPopupFormEdit(editList);
    })
  })
}
