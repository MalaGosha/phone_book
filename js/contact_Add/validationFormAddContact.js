const checkName = (formList) => {
  const regExpName = /^([A-Z][a-z]{2,15}$)/;
  let elementName = formList[0];
  let result = regExpName.test(elementName.value);
  if (result) {
    clearErrorAddForm(elementName);
  } else {
    showErrorCheckAddContact(elementName, 'Nadaj imię składające się od 3 do 15 liter zaczynajace sie z wielkiej litery')
  }
  return result;
}

const checkSurname = (formList) => {
  const regExpSurname = /^([A-Z][a-z]{2,30}$)/;
  let elementSurname = formList[1];
  let result = regExpSurname.test(elementSurname.value);
  if (result) {
    clearErrorAddForm(elementSurname);
  } else {
    showErrorCheckAddContact(elementSurname, 'Nadaj nazwisko składające się od 3 do 20 liter');
  }
  return result;
}

const checkPhoneNumber = (formList) => {
  const regExpPhoneNumber = /^(.[0-9]{8}$)/;
  let elementPhone = formList[2];
  let result = regExpPhoneNumber.test(elementPhone.value);
  if (result) {
    clearErrorAddForm(elementPhone);
  } else {
    showErrorCheckAddContact(elementPhone, 'Nadaj 9 cyfrowy numer telefonu')
  }
  return result;
}
const checkInputFormAddContact = (formList) => {
  let resultName = checkName(formList);
  let resultSurname = checkSurname(formList);
  let resultPhoneNumber = checkPhoneNumber(formList);

  if (resultName && resultSurname && resultPhoneNumber === true){
    createNewContact();
  }
}

const refreshFormAdd = () => {
  const inputsAddContact = document.querySelectorAll('input');
  inputsAddContact.forEach(el => {
    el.addEventListener('keyup', () => {
      clearErrorAddForm(el);
      checkFormAddContact(inputsAddContact);
    })
  })
}

const checkFormAddContact = (formList) => {
  formList.forEach(el => {
    if (el.value === '') {
      showErrorCheckAddContact(el, 'Uzupełnij pole');
    } else {
      checkInputFormAddContact(formList);
    }
  })
};



