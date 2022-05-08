const contactName = document.querySelector("#add_name");
const contactSurname = document.querySelector("#add_surname");
const contactPhoneNumber = document.querySelector("#add_number");
const createContactBtn = document.querySelector('.create');

let formList = [contactName, contactSurname, contactPhoneNumber];

const closePopup = () => {
  popupAddContact.style.display = 'none';
  overlay.style.display = 'none';
  formList.forEach(elList => {
    elList.value = '';
  })
}

const createNewContact = () => {
  let handleContact = new Contact(contactName.value, contactSurname.value, contactPhoneNumber.value);
  addContact(handleContact);
  closePopup();
  refreshMainPage();

}

createContactBtn.addEventListener('click', e => {
  e.preventDefault();
  //createNewContact();
  checkFormAddContact(formList);
});

