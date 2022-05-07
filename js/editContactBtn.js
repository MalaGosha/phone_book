let editList = [];
let contact;
let idToEdit;

const backToMockup = () => {
  const popupEdit = document.querySelector('.popup_edit');
  popupEdit.style.display = 'none';
  overlay.style.display = 'none';
}

const saveChanges = () => {
  const newName = document.querySelector('#edit_name');
  const newSurname = document.querySelector('#edit_surname');
  const newPhoneNumber = document.querySelector('#edit_number');

  contact = getContactById(idToEdit);

  if (newName.value !== '') {
    contact.name = newName.value;
  }
  if (newSurname.value !== '') {
    contact.surname = newSurname.value;
  }
  if (newPhoneNumber.value !== '') {
    contact.phoneNumber = newPhoneNumber.value;
  }

  updateHtml();
  backToMockup();
}

const showSaveBtn = () => {
  const saveBtn = document.querySelector('.save');
  saveBtn.style.display = 'block';
  saveBtn.addEventListener('click', saveChanges);
}

const changeInput = () => {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('keyup', () => {
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
  editBtn.addEventListener('click', () => {
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
  editList = [editName, editSurname, editPhoneNumber];

  contact = getContactById(id);
  editName.placeholder = contact.name;
  editSurname.placeholder = contact.surname;
  editPhoneNumber.placeholder = contact.phoneNumber;

  noEditForm(editList);
}

const getIdContactToEdit = (divContact) => {
  const idContactToEdit = divContact.querySelector('#id');
  idToEdit = idContactToEdit.innerHTML;
  writeContact(idToEdit);
}

const refreshMockup = () => {
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


