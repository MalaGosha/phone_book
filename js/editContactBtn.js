const backToMockup = () => {
  const popupEdit = document.querySelector('.popup_edit');
  popupEdit.style.display = 'none';
  overlay.style.display = 'none';
}

const saveChanges = () => {

}

const getIdContactToEdit = (divContact) => {
  const idContactToEdit = divContact.querySelector('#id');
  let id = idContactToEdit.innerHTML;
  editForm(id);
}


const editForm = (id) => {
  const editName = document.querySelector('#edit_name');
  const editSurname = document.querySelector('#edit_surname');
  const editPhoneNumber = document.querySelector('#edit_number');

  const edit = [editName, editSurname, editPhoneNumber];
  edit.forEach( el => {
    if (el.value == "") {
      el.disabled = false;
    }
  })

  let contact = getContactById(id);

  editName.innerHTML = `<input type="text" id="edit_name" placeholder="${contact.name}"/>`;
  editSurname.innerHTML = `<input type="text" id="edit_surname" placeholder="${contact.surname}"/>`;
  editPhoneNumber.innerHTML = `<input type="text" id="edit_number" placeholder="${contact.phoneNumber}"/>`;



  // edit.forEach(el => {
  //   el.addEventListener('click', canEdit);
  // })

  const saveBtn = document.querySelector('.save');
  saveBtn.addEventListener('click', saveChanges); // do poprawy
}

const noEditForm = () => {
  const editName = document.querySelector('#edit_name');
  const editSurname = document.querySelector('#edit_surname');
  const editPhoneNumber = document.querySelector('#edit_number');

  const edit = [editName, editSurname, editPhoneNumber];
  edit.forEach( el => {
    if (el.value == "") {
      el.disabled = true;
    }
  })
}

const popupEditContact = () => {
  const popupEdit = document.querySelector('.popup_edit');
  popupEdit.style.display = 'block';
  overlay.style.display = 'block';

  const backBtn = document.querySelector('.back');
  backBtn.addEventListener('click', backToMockup);

  const editBtn = document.querySelector('.edit');
  editBtn.addEventListener('click', editForm);

  noEditForm();
}

const refreshMockup = () => {
  const areaContact = document.querySelector('.area_contact');
  areaContact.addEventListener('click', popupEditContact);
  getIdContactToEdit(areaContact);
}


