const areaContacts = document.querySelector('.area_contacts');

const generateHTMLContact = (list) => {
  let counter = 0;
  list.forEach(contact => {
    console.log("counter" + counter)
    let innerHTML = areaContacts.innerHTML;
    areaContacts.innerHTML = `
        ${innerHTML}
      <div class="area_contact">
        <ul class="list_of_contact">
          <li id= ${"contact_" + counter}>
            <label for="contact">
              <i class="fa-solid fa-phone"></i>
              <td id="contact">
                <tr id="name"> ${contact.name}</tr>
                <tr id="surname"> ${contact.surname}</tr>
                <tr id="phone_number"> ${contact.phoneNumber}</tr>
              </td>
            </label>
          </li>
        </ul>
      </div>
    `
    counter++;
  })
}
const clearHTMLAreaContacts = () => {
  areaContacts.innerHTML = '';
}



