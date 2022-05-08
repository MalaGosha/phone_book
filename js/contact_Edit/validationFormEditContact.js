
const checkEditName = (newDateContactList) => {
  const regExpName = /^([A-Z][a-z]{2,15}$)/;
  let elementName = newDateContactList[0];
  let result = regExpName.test(elementName.value);
  if (result) {
    clearErrorAddForm(elementName);
  } else {
    showErrorCheckAddContact(elementName, 'Nadaj imię składające się od 3 do 15 liter zaczynajace sie z wielkiej litery')
  }
  return result;
}




const checkInputFormEditContact = () => {
  const newName = document.querySelector('#edit_name');
  const newSurname = document.querySelector('#edit_surname');
  const newPhoneNumber = document.querySelector('#edit_number');
  newDateContactList = [newName, newSurname, newPhoneNumber];
  contact = getContactById(idToEdit);

  console.log('contact ' + contact);
  console.log('contact.name ' + contact.name);
  console.log('id to edit ' + idToEdit);
  console.log('new name value' + newName.value);


  if (newName.value !== '') {
    checkEditName(newDateContactList);
    console.log('QQQQq');
    console.log('contact.name ' + contact.name);
    console.log('id to edit ' + idToEdit);
    console.log('new name value' + newName.value);
  }
  /*if (newSurname.value !== '') {
    checkSurname(newDateContactList);
  }
  if (newPhoneNumber.value !== '') {
    checkPhoneNumber(newDateContactList);
  }

  let resultName = checkName(newDateContactList);
  let resultSurname = checkSurname(newDateContactList);
  let resultPhoneNumber = checkPhoneNumber(newDateContactList);


  if (resultName === true) {

  }
  if (resultSurname === true) {
    contact.surname = newSurname.value;
  }
  if (resultPhoneNumber === true) {
    contact.phoneNumber = newPhoneNumber.value;
  }
  if (resultName && resultSurname && resultPhoneNumber === true) {

    saveChangeInEditContact();
  }*/
}
