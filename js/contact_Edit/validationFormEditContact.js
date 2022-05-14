const checkEditName = (elementName) => {
  const regExpName = /^([A-Z][a-z]{2,15}$)/;
  let result = regExpName.test(elementName.value);

  if (result || elementName.value === '') {
    clearErrorEditForm(elementName);
  } else {
    showErrorCheckEditContact(elementName, 'Nadaj imię składające się od 3 do 15 liter zaczynajace sie z wielkiej liter')  ;
  }
  return result;
}

const checkEditSurname = (elementSurname) => {
  const regExpSurname = /^([A-Z][a-z]{2,30}$)/;
  let result = regExpSurname.test(elementSurname.value);
  if (result  || elementSurname.value === '') {
    clearErrorEditForm(elementSurname);
  } else {
    showErrorCheckEditContact(elementSurname, 'Nadaj nazwisko składające się od 3 do 20 liter');
  }
  return result;
}

const checkEditPhoneNumber = (elementPhone) => {
  const regExpPhoneNumber = /^(.\d{8}$)/;
  let result = regExpPhoneNumber.test(elementPhone.value);
  if (result || elementPhone.value === '') {
    clearErrorEditForm(elementPhone);
  } else {
    showErrorCheckEditContact(elementPhone, 'Nadaj 9 cyfrowy numer telefonu')
  }
  return result;
}

const checkInputFormEditContact = (editList) => {
  let contact = getContactById(id);
  let newName = editList[0];
  let newSurname = editList[1];
  let newPhoneNumber = editList[2];

  let resultName = checkEditName(newName);
  if(resultName){
    contact.name = newName.value;
  }

  let resultSurname = checkEditSurname(newSurname);
  if(resultSurname) {
    contact.surname = newSurname.value;
  }

  let resultPhoneNumber = checkEditPhoneNumber(newPhoneNumber);
  if(resultPhoneNumber){
    contact.phoneNumber = newPhoneNumber.value;
  }

  if((resultName || newName.value === '')
    && (resultSurname || newSurname.value === '')
    && (resultPhoneNumber || newPhoneNumber.value === '')){
        saveChangeInEditContact(editList);
  }
}


