const searchPopup = document.querySelector('.popup');
const overlay2 = document.querySelector('.overlay2');

const getIdContactToDelete = (divContact) => {
  const idContactToDelete = divContact.querySelector('#id');
  return idContactToDelete.innerHTML;
  }

async function chooseContactToDelete(){
 const areaContactDelete = document.querySelectorAll('.area_contactDelete');

  if(areaContactDelete.length === 0) {
    hidePopupDeleteContact();
  } else {
    areaContactDelete.forEach(divContact => {
      divContact.addEventListener("click", async e => {
        const popupConfirmDelete = document.querySelector('.popup_confirmDelete');
        popupConfirmDelete.style.display = 'block';
        overlay.style.display = 'block';
        overlay2.style.display = 'block';
        let id = getIdContactToDelete(divContact);
        let contact = await getContactById(id);
        generateHTMLConfirmContactToDelete(contact);
        clearErrorDeleteForm();
        clearInputs();
      });
    })
  }
}

const searchContactToDelete = async contact => {
  showFilteredContactsToGrid(contact);
  await chooseContactToDelete();
}

searchPopup.addEventListener('keyup', searchContactToDelete);

overlay2.addEventListener('click', event => {
  popupConfirmDelete.style.display = 'none';
  overlay2.style.display = 'block';
  popupDeleteContact.style.display = 'block';
  overlay.style.display = 'block';
})
