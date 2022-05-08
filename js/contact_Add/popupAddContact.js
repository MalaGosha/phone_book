const contactName = document.querySelector("#add_name");
const contactSurname = document.querySelector("#add_surname");
const contactPhoneNumber = document.querySelector("#add_number");
const createContactBtn = document.querySelector('.create');

let arrayDataAddContact = [contactName, contactSurname, contactPhoneNumber];

const closePopup = () => {
  popupAddContact.style.display = 'none';
  overlay.style.display = 'none';
  arrayDataAddContact.forEach(elementData => {
    elementData.value = '';
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
  checkFormAddContact(arrayDataAddContact);
});

