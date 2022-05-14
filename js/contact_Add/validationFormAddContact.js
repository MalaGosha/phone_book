const checkName = (elementName) => {
  const regExpName = /^([A-Z][a-z]{2,15}$)/;
  let result = regExpName.test(elementName.value);
  if (result) {
    clearErrorAddForm(elementName);
  } else {
    showErrorCheckAddContact(elementName, 'Nadaj imię składające się od 3 do 15 liter zaczynajace sie z wielkiej litery')
  }
  return result;
}

const checkSurname = (elementSurname) => {
  const regExpSurname = /^([A-Z][a-z]{2,30}$)/;
  let result = regExpSurname.test(elementSurname.value);
  if (result) {
    clearErrorAddForm(elementSurname);
  } else {
    showErrorCheckAddContact(elementSurname, 'Nadaj nazwisko składające się od 3 do 20 liter');
  }
  return result;
}

const checkPhoneNumber = (elementPhone) => {
  const regExpPhoneNumber = /^(.\d{8}$)/;
  let result = regExpPhoneNumber.test(elementPhone.value);
  if (result) {
    clearErrorAddForm(elementPhone);
  } else {
    showErrorCheckAddContact(elementPhone, 'Nadaj 9 cyfrowy numer telefonu')
  }
  return result;
}
const checkInputFormAddContact = (arrayDataAddContact) => {
  let resultName = checkName(arrayDataAddContact[0]);
  let resultSurname = checkSurname(arrayDataAddContact[1]);
  let resultPhoneNumber = checkPhoneNumber(arrayDataAddContact[2]);

  if (resultName && resultSurname && resultPhoneNumber === true){
    createNewContact();
    clearAllErrorsAddForm();
  }
}

const checkFormAddContact = (arrayDataAddContact) => {
  arrayDataAddContact.forEach(el => {
    if (el.value == '') {
      showErrorCheckAddContact(el, 'Uzupełnij pole');
    } else {
      checkInputFormAddContact(arrayDataAddContact);
    }
  })
};



