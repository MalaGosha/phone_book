const areaContacts = document.querySelector('.area_contacts');
const areaContactsPopupDelete = document.querySelector('.popupDelete');


const generateHTMLContact = (list) => {
  let counter = 0;
  list.forEach(contact => {
    let innerHTML = areaContacts.innerHTML;
    areaContacts.innerHTML = `
        ${innerHTML}
      <div class="area_contact" id= ${"contact_" + counter}>
        <span id="id" style="display: none"> ${contact.id}</span>
        <span id="name"> ${contact.name}</span>
        <span id="surname"> ${contact.surname}</span>
        <i class="fa-solid fa-phone"></i>
        <span id="phone_number"> ${contact.phoneNumber}</span>
      </div>
    `
    counter++;
  })
}

const generateHTMLContactToDelete = deleteList => {
  let counter = 0;
  deleteList.forEach(contact => {
    let innerHTML = areaContactsPopupDelete.innerHTML;
    areaContactsPopupDelete.innerHTML = `
        ${innerHTML}
      <div class="area_contactDelete" id= ${"contact_" + counter}>
        <span id="id" style="display: none"><tr> ${contact.id}</tr></span>
        <span id="name"> ${contact.name}</span>
        <span id="surname"> ${contact.surname}</span>
        <i class="fas fa-trash-alt"></i>
        <span id="phone_number"> ${contact.phoneNumber}</span>
      </div>
    `
    counter++;
  })
}

const generateHTMLConfirmContactToDelete = (id) => {
  const divContactToConfirmDelete = document.querySelector('#display_contact_to_delete');
  let contact = getContactById(id);

  divContactToConfirmDelete.innerHTML =  `
    <span id="deleted_Id" style="display: none"><tr> ${contact.id}</tr></span>
    <span>${contact.name}</span>
    <span>${contact.surname}</span>
  `;
}

const clearHTMLAreaContacts = () => {
  areaContacts.innerHTML = '';
  areaContactsPopupDelete.innerHTML = '';
}

function updateHtml(contactsList) {
  clearHTMLAreaContacts();
  contactsList.sort((a, b) => a.name.localeCompare(b.name))
  generateHTMLContact(contactsList);
  generateHTMLContactToDelete(contactsList);
}



