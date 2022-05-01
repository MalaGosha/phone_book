const areaContacts = document.querySelector('.area_contacts');
const areaContactsPopupDelete = document.querySelector('.popupDelete');


const generateHTMLContact = (list) => {
  let counter = 0;
  list.forEach(contact => {
    let innerHTML = areaContacts.innerHTML;
    areaContacts.innerHTML = `
        ${innerHTML}
      <div class="area_contact">
        <ul id= ${"contact_" + counter}>
          <li>
            <i class="fa-solid fa-phone"></i>
            <td>
              <span id="id" style="display: none">
                 <tr> ${contact.id}</tr>
              </span>
              <tr id="name"> ${contact.name}</tr>
              <tr id="surname"> ${contact.surname}</tr>
              <tr id="phone_number"> ${contact.phoneNumber}</tr>
            </td>
          </li>
        </ul>
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
      <div class="area_contactDelete">
        <ul  id= ${"contact_" + counter}>
          <li>
            <i class="fas fa-trash-alt"></i>
            <td>
              <span id="id" style="display: none">
                  <tr> ${contact.id}</tr>
              </span>
              <tr id="name"> ${contact.name}</tr>
              <tr id="surname"> ${contact.surname}</tr>
              <tr id="phone_number"> ${contact.phoneNumber}</tr>
            </td>
          </li>
        </ul>
      </div>
    `
    counter++;
  })
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



