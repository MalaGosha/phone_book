
class Contact {
  id;
  name;
  surname;
  phoneNumber;
  createDate;
  modificationDate;

  constructor(name, surname, phoneNumber) {
    this.id = null;
    this.name = name;
    this.surname = surname;
    this.phoneNumber = phoneNumber;
    this.createDate = formatDate(Date.now());
    this.modificationDate = null;
  }
}

