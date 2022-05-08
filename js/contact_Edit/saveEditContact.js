const saveChangeInEditContact = () => {
  const newName = document.querySelector('#edit_name');
  const newSurname = document.querySelector('#edit_surname');
  const newPhoneNumber = document.querySelector('#edit_number');
  newDateContactList = [newName, newSurname, newPhoneNumber];

  contact = getContactById(idToEdit);

  if (newName.value !== '') {
    contact.name = newName.value;
  }
  if (newSurname.value !== '') {
    contact.surname = newSurname.value;
  }
  if (newPhoneNumber.value !== '') {
    contact.phoneNumber = newPhoneNumber.value;
  }
  updateHtml();
  backToMockup();
}

const showSaveBtn = () => {
  const saveBtn = document.querySelector('.save');
  saveBtn.style.display = 'block';
  saveBtn.addEventListener('click', saveChangeInEditContact);
}
