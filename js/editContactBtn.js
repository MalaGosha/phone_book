const backToMockup = () => {
  const popupEdit = document.querySelector('.popup_edit');
  popupEdit.style.display = 'none';
  overlay.style.display = 'none';
}

const saveChanges = () => {
  const
}

const showSaveBtn = () => {
  const saveBtn = document.querySelector('.save');
  saveBtn.style.display = 'block';
  saveBtn.addEventListener('click', saveChanges);
}

const changeInput = () => {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('keyup', e=> {
      if (input.value !== '') {
        showSaveBtn();
      }
    })
  })
}

const noEditForm = (editList) => {
  editList.forEach(el => {
    if (el.value == '') {
      el.disabled = true;
    }
  })

  const editBtn = document.querySelector('.edit');
  editBtn.addEventListener('click', e => {
    editList.forEach(el => {
      if (el.value == '') {
        el.disabled = false;
      }
    })
    changeInput();
  });
}

const writeContact = (id) => {
  const editName = document.querySelector('#edit_name');
  const editSurname = document.querySelector('#edit_surname');
  const editPhoneNumber = document.querySelector('#edit_number');
  const editList = [editName, editSurname, editPhoneNumber];

  let contact = getContactById(id);
  editName.placeholder = contact.name;
  editSurname.placeholder = contact.surname;
  editPhoneNumber.placeholder = contact.phoneNumber;

  noEditForm(editList);
}

const getIdContactToEdit = (divContact) => {
  const idContactToEdit = divContact.querySelector('#id');
  let idToEdit = idContactToEdit.innerHTML;
  console.log('idContactToEdit z getIDContactToEdit to: ' + idToEdit)
  writeContact(idToEdit);
}

const popupEditContact = () => {
  const popupEdit = document.querySelector('.popup_edit');
  popupEdit.style.display = 'block';
  overlay.style.display = 'block';

  const backBtn = document.querySelector('.back');
  backBtn.addEventListener('click', backToMockup);
}

const refreshMockup = () => {
  const listAreaContacts = document.querySelectorAll('.area_contact');
  listAreaContacts.forEach(areaContact => {
    areaContact.addEventListener('click', popupEditContact);
    getIdContactToEdit(areaContact);
  })

}


