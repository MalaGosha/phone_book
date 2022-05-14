const searchPopup = document.querySelector('.popup');
const overlaySecond = document.querySelector('.overlay_second');

const showPopupFormConfirmToDelete = () => {
  const popupConfirmDelete = document.querySelector('.popup_confirmDelete');
  popupConfirmDelete.style.display = 'block';
  overlay.style.display = 'block';
  overlaySecond.style.display = 'block';
}

async function chooseContactToDelete(){
 const areaContactDelete = document.querySelectorAll('.area_contactDelete');

  if(areaContactDelete.length === 0) {
    hidePopupDeleteContact();
  } else {
    areaContactDelete.forEach(areaContact => {
      areaContact.addEventListener("click", async () => {
        let record = getRecordByAreaContact(areaContact);
        let id = getIdByRecord(record);
        let contact = await getContactById(id);
        showPopupFormConfirmToDelete();
        generateStructureToConfirmFormDelete(record, contact);
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

overlaySecond.addEventListener('click', () => {
  popupConfirmDelete.style.display = 'none';
  overlaySecond.style.display = 'block';
  popupDeleteContact.style.display = 'block';
  overlay.style.display = 'block';
})
