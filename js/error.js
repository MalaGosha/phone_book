const showErrorCheckConfirm = () => {
  const error = document.querySelector('.error');
  error.innerHTML = "Wpisz poprawnie jeszcze raz!"
}

const showErrorCheckAddContact = (inputEl, msg) => {
  const formBox = inputEl.parentElement;
  const errorMsg = formBox.querySelector('.error_add');

  errorMsg.style.display = 'block';
  errorMsg.textContent = msg;
  refreshFormAdd();
}