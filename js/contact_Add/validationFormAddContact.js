// let formArray = [];

/*
const correctForm = (formArray) => {
  formArray.forEach(el=> {
    if(el.value === true){
      createNewContact();
    }
  })
}
*/

const checkName = (formList) => {
  const regExpName = /^([A-Z][a-z]{2,15}$)/;
  if(!regExpName.test(formList[0].value)){
    showErrorCheckAddContact(formList[0], 'Nadaj imię składające się od 3 do 15 liter')
  } else {
    clearErrorAddForm(formList[0].value);
  }
}

const checkSurname = (formList) => {
  const regExpSurname = /^([A-Z][a-z]{2,30}$)/;
  if(!regExpSurname.test(formList[1].value)){
    showErrorCheckAddContact(formList[1], 'Nadaj nazwisko składające się od 3 do 20 liter')
  } else {
    clearErrorAddForm(formList[1].value);
  }
}

const checkPhoneNumber = (formList) => {
  const regExpPhoneNumber = /^(.[0-9]{8}$)/;
  if(!regExpPhoneNumber.test(formList[2].value)){
    showErrorCheckAddContact(formList[2], 'Nadaj 9 cyfrowy numer telefonu')
  } else {
    clearErrorAddForm(formList[2].value);
  }
}
const checkInputFormAddContact = (formList) => {
  checkName(formList);
  checkSurname(formList);
  checkPhoneNumber(formList);

 // refreshFormAdd();
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



