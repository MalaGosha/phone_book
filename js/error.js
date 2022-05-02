const showError = () => {
  const error = document.querySelector('.error');
  error.innerHTML = "Wpisz poprawnie jeszcze raz!"
}

const clearError = () => {
  const error = document.querySelector('.error');
  error.innerHTML = "";
}


const clearInput = () => {
  searchPopup.innerHTML = '';
  search.innerHTML = '';
  const inputConfirm = document.querySelector('#confirm');
  inputConfirm.innerHTML = '';
}
