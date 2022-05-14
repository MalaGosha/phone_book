const changeDataInInput = (id) => {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('keyup', () => {
      if (input.value !== '') {
        showSaveAndEditDate(id);
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
}

const disabledFormEdit = (id, editList) => {
  editList.forEach(el => {
    if (el.value == '') {
      el.disabled = true;
    }
  })
  const editBtn = document.querySelector('.edit');
  editBtn.addEventListener('click', () => {
    activeFormEdit(editList);
    changeDataInInput(id);/*date??? no data??*/
  });
}

const getInputsToEdit = () => {
  const editName = document.querySelector('#edit_name');
  const editSurname = document.querySelector('#edit_surname');
  const editPhoneNumber = document.querySelector('#edit_number');
  return [editName, editSurname, editPhoneNumber];
}

const writeDataToPopupEditForm = async (id, editList) => {
  let contact = await getContactById(id);
  const currentDate = document.getElementById('current_date');
  editList[0].placeholder = contact.name;
  editList[1].placeholder = contact.surname;
  editList[2].placeholder = contact.phoneNumber;
  currentDate.innerHTML = contact.createDate;
}

const hidePopupFormToEdit = (editList) => {
  const popupEdit = document.querySelector('.popup_edit');
  popupEdit.style.display = 'none';
  overlay.style.display = 'none';
  editList.forEach(elList => {
    elList.value = '';
  })
}
