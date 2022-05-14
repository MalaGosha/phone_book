const getIdContactToEdit = (areaContact) => {
  const idContactToEdit = areaContact.querySelector('#id');
  return idContactToEdit.innerHTML;
}

const changeDateInInput = (editList) => {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('keyup', () => {
      if (input.value !== '') {
        showSaveBtnAndEditDate(editList);
      } else {
        hideSaveBtn();
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
    changeDateInInput(editList);
  });
}

const getInputsToEditForm = () => {
  const editName = document.querySelector('#edit_name');
  const editSurname = document.querySelector('#edit_surname');
  const editPhoneNumber = document.querySelector('#edit_number');
  return [editName, editSurname, editPhoneNumber];
}

const writeDataToPopup = (areaContact) => {
  id = getIdContactToEdit(areaContact);
  contact = getContactById(id);
  let editList = getInputsToEditForm();

  editList[0].placeholder = contact.name;
  editList[1].placeholder = contact.surname;
  editList[2].placeholder = contact.phoneNumber;
  const currentDate = document.getElementById('current_date');
  currentDate.innerHTML = contact.createDate;
}

const backToMainPage = (editList) => {
  const popupEdit = document.querySelector('.popup_edit');
  popupEdit.style.display = 'none';
  overlay.style.display = 'none';
  editList.forEach(elList => {
    elList.value = '';
  })
  listenersToContact();
}



