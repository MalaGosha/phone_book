const contactName = document.querySelector("#add_name");
const contactSurname = document.querySelector("#add_surname");
const contactPhoneNumber = document.querySelector("#add_number");
const error = document.querySelector('.error_add');
const createContactBtn = document.querySelector('.create');

let formList = [contactName, contactSurname, contactPhoneNumber];

const closePopup = () => {
  popupAddContact.style.display = 'none';
  overlay.style.display = 'none';
  formList.forEach(elList => {
    elList.value = '';
  })
}

function createNewContact(){
  let handleContact = new Contact(contactName.value, contactSurname.value, contactPhoneNumber.value);
  addContact(handleContact);
  closePopup();
  refreshMockup();
}

createContactBtn.addEventListener('click', e => {
  e.preventDefault();
  createNewContact();
});

