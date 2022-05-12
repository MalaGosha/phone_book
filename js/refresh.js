const prepareContactToEdit = () => {
  const listAreaContacts = document.querySelectorAll('.area_contact');
  listAreaContacts.forEach(areaContact => {
    areaContact.addEventListener('click', () => {
      //writeDataToPopup(areaContact);
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


