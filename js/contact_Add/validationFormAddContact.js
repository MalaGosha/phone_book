const checkName = (arrayDataAddContact) => {
  const regExpName = /^([A-Z][a-z]{2,15}$)/;
  let elementName = arrayDataAddContact[0];
  let result = regExpName.test(elementName.value);
  if (result) {
    clearErrorAddForm(elementName);
  } else {
    showErrorCheckAddContact(elementName, 'Nadaj imię składające się od 3 do 15 liter zaczynajace sie z wielkiej litery')
  }
  return result;
}

const checkSurname = (arrayDataAddContact) => {
  const regExpSurname = /^([A-Z][a-z]{2,30}$)/;
  let elementSurname = arrayDataAddContact[1];
  let result = regExpSurname.test(elementSurname.value);
  if (result) {
    clearErrorAddForm(elementSurname);
  } else {
    showErrorCheckAddContact(elementSurname, 'Nadaj nazwisko składające się od 3 do 20 liter');
  }
  return result;
}

const checkPhoneNumber = (arrayDataAddContact) => {
  const regExpPhoneNumber = /^(.[0-9]{8}$)/;
  let elementPhone = arrayDataAddContact[2];
  let result = regExpPhoneNumber.test(elementPhone.value);
  if (result) {
    clearErrorAddForm(elementPhone);
  } else {
    showErrorCheckAddContact(elementPhone, 'Nadaj 9 cyfrowy numer telefonu')
  }
  return result;
}
const checkInputFormAddContact = (arrayDataAddContact) => {
  let resultName = checkName(arrayDataAddContact);
  let resultSurname = checkSurname(arrayDataAddContact);
  let resultPhoneNumber = checkPhoneNumber(arrayDataAddContact);

  if (resultName && resultSurname && resultPhoneNumber === true){
    createNewContact();
    clearAllErrors();
  }
}

const refreshFormAdd = () => {
  const inputsDataAddContact = document.querySelectorAll('input');
  inputsDataAddContact.forEach(el => {
    el.addEventListener('keyup', () => {
      clearErrorAddForm(el);
      checkFormAddContact(inputsDataAddContact);
    })
  })
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



