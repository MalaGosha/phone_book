const clearErrorDeleteForm = () => {
  const error = document.querySelector('.error');
  error.innerHTML = "";
}

const clearErrorAddForm = (inputEl) => {
  const formBox = inputEl.parentElement;
  const errorMsg = formBox.querySelector('.error_add');
  errorMsg.innerHTML = '';
}

const clearAllErrorsAddForm = () => {
  const errors = document.querySelectorAll('.error_add');
  errors.forEach(el => {
    el.style.display = 'none';
    el.innerHTML = '';
  })
}

const clearErrorEditForm = (inputEl) => {
  const formBox = inputEl.parentElement;
  const errorMsg = formBox.querySelector('.error');
  errorMsg.style.display = 'none';
  errorMsg.innerHTML = '';
}

const clearAllErrorsEditForm = () => {
  const errors = document.querySelectorAll('.editErrorForm');
  errors.forEach(el => {
    el.style.display = 'none';
    el.innerHTML = '';
  })
}

const clearInputs = () => {
  searchPopup.innerHTML = '';
  search.innerHTML = '';
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.value = '';
  })
}
