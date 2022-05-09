const refreshMainPage = () => {
  const listAreaContacts = document.querySelectorAll('.area_contact');
  listAreaContacts.forEach(areaContact => {
    areaContact.addEventListener('click', () => {
      showPopupFormEdit();
      getIdContactToEdit(areaContact);
    });
  })
}

const refreshFormEdit = () => {
  implementedDateContactList.forEach(el => {
    el.addEventListener('keyup', () => {
      clearErrorEditForm(el);
    })
  })
}

const refreshFormAdd = () => {
  arrayDataAddContact.forEach(el => {
    el.addEventListener('keyup', () => {
      clearErrorAddForm(el);
    })
  })
}
