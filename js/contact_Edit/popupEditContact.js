const changeDateInInput = () => {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('keyup', () => {
      if (input.value !== '') {
        showSaveBtnAndEditDate();
      } else {
        hideSaveBtn();
      }
    })
  })
}

const activeFormEdit = (editList) => {
  editList.forEach(el => {
    if (el.value == '') {
      el.disabled = false;
    }
  })
  changeDateInInput();
}

const disabledFormEdit = (editList) => {
  editList.forEach(el => {
    if (el.value == '') {
      el.disabled = true;
    }
  })
  const editBtn = document.querySelector('.edit');
  editBtn.addEventListener('click', () => {
    activeFormEdit(editList);
  });
}

const writeDataToPopupEditForm = async (areaContact) => {
/*  let record = getRecordByContact(areaContact);
  let id = getIdByRecord(record);

/!*  const editName = document.querySelector('#edit_name');
  const editSurname = document.querySelector('#edit_surname');
  const editPhoneNumber = document.querySelector('#edit_number');
  const currentDate = document.getElementById('current_date');
  let editList = [editName, editSurname, editPhoneNumber];

  let contact = await getContactById(id);
  editName.placeholder = contact.name;
  editSurname.placeholder = contact.surname;
  editPhoneNumber.placeholder = contact.phoneNumber;
  currentDate.innerHTML = contact.createDate;

  disabledFormEdit(editList);*!/*/

}

const hidePopupFormToEdit = () => {
  const popupEdit = document.querySelector('.popup_edit');
  popupEdit.style.display = 'none';
  overlay.style.display = 'none';
  implementedDateContactList.forEach(elList => {
    elList.value = '';
  })
  clearHTMLAreaContacts();
}



