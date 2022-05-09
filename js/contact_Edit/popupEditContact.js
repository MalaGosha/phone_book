let editList = [];
let contact;
let idToEdit;
let implementedDateContactList = [];

const changeDateInInput = () => {
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
    changeDateInInput();
  });
}

const writeDateContactToPlaceholder = (id) => {
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

const getIdContactToEdit = (areaContact) => {
  const idContactToEdit = areaContact.querySelector('#id');
  idToEdit = idContactToEdit.innerHTML;
  writeDateContactToPlaceholder(idToEdit);
}

const backToMainPage = () => {
  const popupEdit = document.querySelector('.popup_edit');
  popupEdit.style.display = 'none';
  overlay.style.display = 'none';
  implementedDateContactList.forEach(elList => {
    elList.value = '';
  })
  refreshMainPage();
}



