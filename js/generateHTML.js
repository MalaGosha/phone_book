const areaContacts = document.querySelector('.area_contacts');
const areaContactsPopupDelete = document.querySelector('.popupDelete');

const generateHTMLContact = (record, contact) => {
  let innerHTML = areaContacts.innerHTML
  areaContacts.innerHTML = innerHTML + `
      <div class="area_contact">
        <span id="record" style="display: none">${record}</span>
        <span id="name"> ${contact.name}</span>
        <span id="surname"> ${contact.surname}</span>
        <i class="fa-solid fa-phone"></i>
        <span id="phone_number"> ${contact.phoneNumber}</span>
      </div>
    `
}

const generateHTMLContactToDelete = (record, contact) => {
  let innerHTML = areaContactsPopupDelete.innerHTML
  areaContactsPopupDelete.innerHTML = innerHTML + `
      <div class="area_contactDelete">
        <i class="fas fa-trash-alt"></i>
        <span id="record" style="display: none">${record}</span>
        <span id="name"> ${contact.name}</span>
        <span id="surname"> ${contact.surname}</span>
        <span id="phone_number"> ${contact.phoneNumber}</span>
      </div>
    `
}

const generateStructureToConfirmFormDelete = (record, contact) => {
  const divContactToConfirmDelete = document.querySelector('#display_contact_to_delete');
  divContactToConfirmDelete.innerHTML = `
    <div>
      <span id="deleted_Id" style="display: none">${record}</span>
      <span>${contact.name}</span>
      <span>${contact.surname}</span>
    </div>
  `
}

const clearHTMLAreaContacts = () => {
  areaContacts.innerHTML = '';
  areaContactsPopupDelete.innerHTML = '';
}

async function updateMainPage() {
  let allContacts = await getAscAllContact();
  clearHTMLAreaContacts();
  clearInputs();
  generateStructureToMainPage(allContacts);
  listenersToContacts();
}

async function updateMainPageWithSortAllContacts(arrayContacts) {
  clearHTMLAreaContacts();
  clearInputs();
  generateStructureToMainPage(arrayContacts);
  listenersToContacts();
}
