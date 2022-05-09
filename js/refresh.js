const refreshMainPage = () => {
  const listAreaContacts = document.querySelectorAll('.area_contact');
  listAreaContacts.forEach(areaContact => {
    areaContact.addEventListener('click', () => {
      writeDataToPopup(areaContact);
      showPopupFormEdit();
    });
  })
}

const refreshFormAdd = () => {
  arrayDataAddContact.forEach(el => {
    el.addEventListener('keyup', () => {
      clearErrorAddForm(el);
    })
  })
}

/*
const refreshFormEdit = () => {
  implementedDateContactList.forEach(el => {
    el.addEventListener('keyup', () => {
      clearErrorEditForm(el);
    })
  })
}

const refreshInputFormEdit = (inputEl) => {
  inputEl.addEventListener('keyup', clearErrorEditForm);
};
*/
