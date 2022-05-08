const clearError = () => {
  const error = document.querySelector('.error');
  error.innerHTML = "";
}

const clearAllErrors = () => {
  const errors = document.querySelectorAll('.error_add');
  errors.forEach(el => {
    console.log(el);
    el.style.display = 'none';
    el.innerHTML = '';
  })
}

const clearErrorAddForm = (inputEl) => {
  const formBox = inputEl.parentElement;
  const errorMsg = formBox.querySelector('.error_add');
  errorMsg.style.display = 'none';
  errorMsg.innerHTML = '';
}

/*
const clearErrorEditForm = (inputEl) => {
  const formBox = inputEl.parentElement;
  const errorMsg = formBox.querySelector('.error');
  errorMsg.style.display = 'none';
  errorMsg.innerHTML = '';
}
*/

const clearInput = () => {
  searchPopup.innerHTML = '';
  search.innerHTML = '';
  const inputConfirm = document.querySelector('#confirm');
  inputConfirm.innerHTML = '';
  const contactName = document.querySelector('#add_name');
  contactName.innerHTML ='';
  const contactSurname = document.querySelector('#add_surname');
  contactSurname.innerHTML ='';
  const contactPhoneNumber = document.querySelector('#add_number');
  contactPhoneNumber.innerHTML = '';
}
