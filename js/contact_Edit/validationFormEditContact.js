const checkEditName = (editedContact) => {
  const regExpName = /^([A-Z][a-z]{2,15}$)/;
  let elementName = editedContact[0];
  let result = regExpName.test(elementName.value);

  if (result || elementName.value === '') {
    clearErrorEditForm(elementName);
  } else {
    showErrorCheckEditContact(elementName, 'Nadaj imię składające się od 3 do 15 liter zaczynajace sie z wielkiej liter');
  }
  return result;
}

const checkEditSurname = (editedContact) => {
  const regExpSurname = /^([A-Z][a-z]{2,30}$)/;
  let elementSurname = editedContact[1];
  let result = regExpSurname.test(elementSurname.value);
  if (result || elementSurname.value === '') {
    clearErrorEditForm(elementSurname);
  } else {
    showErrorCheckEditContact(elementSurname, 'Nadaj nazwisko składające się od 3 do 20 liter');
  }
  return result;
}

const checkEditPhoneNumber = (editedContact) => {
  const regExpPhoneNumber = /^(.[0-9]{8}$)/;
  let elementPhone = editedContact[2];
  let result = regExpPhoneNumber.test(elementPhone.value);
  if (result || elementPhone.value === '') {
    clearErrorEditForm(elementPhone);
  } else {
    showErrorCheckEditContact(elementPhone, 'Nadaj 9 cyfrowy numer telefonu')
  }
  return result;
}

const checkInputFormEditContact = async (id) => {
  let editedContact = getInputsToEdit();
  let newName = editedContact[0];
  let newSurname = editedContact[1];
  let newPhoneNumber = editedContact[2];

  let contact = await getContactById(id);

  let resultName = checkEditName(editedContact);
  if (resultName) {
    contact.name = newName.value;
  }

  let resultSurname = checkEditSurname(editedContact);
  if (resultSurname) {
    contact.surname = newSurname.value;
  }

  let resultPhoneNumber = checkEditPhoneNumber(editedContact);
  if (resultPhoneNumber) {
    contact.phoneNumber = newPhoneNumber.value;
  }

  if ((resultName || newName.value === '')
    && (resultSurname || newSurname.value === '')
    && (resultPhoneNumber || newPhoneNumber.value === '')) {
    await editContactWithNewData(id, contact)
    await closePopupEditForm(editedContact);
  }
}


