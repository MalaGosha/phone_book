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
    this.createDate = Date();
    this.modificationDate = null;
    counter++;
  }
}

function addContact(contact) {
  contactsList.push(contact);
  console.log(contactsList);
  clearHTMLAreaContacts();
  generateHTMLContact(contactsList);
}
