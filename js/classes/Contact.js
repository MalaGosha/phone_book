let contactsList = [];
let counter = 0;

class Contact {
  id;
  name;
  surname;
  phoneNumber;
  createDate;
  modificationDate;

  constructor(name, surname, phoneNumber) {
    this.id = counter;
    this.name = name;
    this.surname = surname;
    this.phoneNumber = phoneNumber;
    this.createDate = formatDate(Date.now());
    this.modificationDate = null;
    counter++;
  }
}


function getContactById(id){
  let filter = contactsList.filter(el => el.id == id);// zwróci liste z 1 kontaktem
  return filter[0]; //pobieramy ten kontakt
}

function addContact(contact) {
  contactsList.push(contact);
  updateHtml();
}

function deleteContactById(id){
  contactsList = contactsList.filter(el => el.id != id);
  updateHtml();
}

function getContactList(){
  return contactsList;
}

