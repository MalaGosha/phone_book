const contactDateToAdd = [];

const getContact = (contactDateToAdd) => {

}


const checkName = (formList) => {
  const regExpName = /^([A-Z][a-z]{2,15}$)/;
  let elementName = formList[0];
  if (!regExpName.test(elementName.value)) {
    showErrorCheckAddContact(elementName, 'Nadaj imię składające się od 3 do 15 liter zaczynajace sie z wielkiej litery')
  } else {
    clearErrorAddForm(elementName);
    contactDateToAdd[0] = elementName.value;

  }
}

const checkSurname = (formList) => {
  const regExpSurname = /^([A-Z][a-z]{2,30}$)/;
  let elementSurname = formList[1];
  if (!regExpSurname.test(elementSurname.value)) {
    showErrorCheckAddContact(elementSurname, 'Nadaj nazwisko składające się od 3 do 20 liter')
  } else {
    clearErrorAddForm(elementSurname);
    contactDateToAdd[1] = elementSurname.value;
  }
}

const checkPhoneNumber = (formList) => {
  const regExpPhoneNumber = /^(.[0-9]{8}$)/;
  let elementPhone = formList[2];
  if (!regExpPhoneNumber.test(elementPhone.value)) {
    showErrorCheckAddContact(elementPhone, 'Nadaj 9 cyfrowy numer telefonu')
  } else {
    clearErrorAddForm(elementPhone);
    contactDateToAdd[2] = elementPhone.value;
  }
}
const checkInputFormAddContact = (formList) => {
  checkName(formList);
  checkSurname(formList);
  checkPhoneNumber(formList);
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
    if (el.value == '') {
      showErrorCheckAddContact(el, 'Uzupełnij pole');
    } else {
      checkInputFormAddContact(formList);
    }
  })
};



