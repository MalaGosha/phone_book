const showErrorCheckConfirm = () => {
  const error = document.querySelector('.confirmDelete');
  error.innerHTML = "Wpisz poprawnie jeszcze raz!"
}

const showErrorCheckAddContact = (inputEl, msg) => {
  const formBox = inputEl.parentElement;
  const errorMsg = formBox.querySelector('.error_add');
  errorMsg.style.display = 'block';
  errorMsg.innerHTML = msg;
  refreshFormAdd();
}

const showErrorCheckEditContact = (inputEl, msg) => {
  const formBox = inputEl.parentElement;
  const errorMsg = formBox.querySelector('.error');
  errorMsg.style.display = 'block';
  errorMsg.innerHTML = msg;
}
