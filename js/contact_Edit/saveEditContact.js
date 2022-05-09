const saveChangeInEditContact = () => {
  updateHtml();
  backToMockup();
}

const showSaveBtn = () => {
  const saveBtn = document.querySelector('.save');
  saveBtn.style.display = 'block';
  saveBtn.addEventListener('click', checkInputFormEditContact);
}
