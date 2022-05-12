const checkEditName = (implementedDateContactList) => {
  const regExpName = /^([A-Z][a-z]{2,15}$)/;
  let elementName = implementedDateContactList[0];
  let result = regExpName.test(elementName.value);

  if (result || elementName.value === '') {
    clearErrorEditForm(elementName);
  } else {
    showErrorCheckEditContact(elementName, 'Nadaj imię składające się od 3 do 15 liter zaczynajace sie z wielkiej liter')  ;
  }
  return result;
}

const checkEditSurname = (implementedDateContactList) => {
  const regExpSurname = /^([A-Z][a-z]{2,30}$)/;
  let elementSurname = implementedDateContactList[1];
  let result = regExpSurname.test(elementSurname.value);
  if (result  || elementSurname.value === '') {
    clearErrorEditForm(elementSurname);
  } else {
    showErrorCheckEditContact(elementSurname, 'Nadaj nazwisko składające się od 3 do 20 liter');
  }
  return result;
}

const checkEditPhoneNumber = (implementedDateContactList) => {
  const regExpPhoneNumber = /^(.[0-9]{8}$)/;
  let elementPhone = implementedDateContactList[2];
  let result = regExpPhoneNumber.test(elementPhone.value);
  if (result || elementPhone.value === '') {
    clearErrorEditForm(elementPhone);
  } else {
    showErrorCheckEditContact(elementPhone, 'Nadaj 9 cyfrowy numer telefonu')
  }
  return result;
}

const checkInputFormEditContact = async () => {
  const newName = document.querySelector('#edit_name');
  const newSurname = document.querySelector('#edit_surname');
  const newPhoneNumber = document.querySelector('#edit_number');
  implementedDateContactList = [newName, newSurname, newPhoneNumber];

  let contact = await getContactById(id);

  let resultName = checkEditName(implementedDateContactList);
  if(resultName){
    console.log(contact)
    console.log(contact.name)
    console.log(newName.value)
    contact.name = newName.value;
  }

  let resultSurname = checkEditSurname(implementedDateContactList);
  if(resultSurname) {
    contact.surname = newSurname.value;
  }

  let resultPhoneNumber = checkEditPhoneNumber(implementedDateContactList);
  if(resultPhoneNumber){
    contact.phoneNumber = newPhoneNumber.value;
  }

  if(resultName || newName.value === ''){
    if(resultSurname || newSurname.value === ''){
      if(resultPhoneNumber || newPhoneNumber.value === ''){
        saveChangeInEditContact();
      }
    }
  }
}


