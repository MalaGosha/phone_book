const refreshMainPage = () => {
  const listAreaContacts = document.querySelectorAll('.area_contact');
  listAreaContacts.forEach(areaContact => {
    areaContact.addEventListener('click', () => {
      const popupEdit = document.querySelector('.popup_edit');
      popupEdit.style.display = 'block';
      overlay.style.display = 'block';
      const backBtn = document.querySelector('.back');
      backBtn.addEventListener('click', backToMockup);
      getIdContactToEdit(areaContact);
    });
  })
}
