const refreshFormAdd = () => {
  arrayDataAddContact.forEach(el => {
    el.addEventListener('keyup', () => {
      clearErrorAddForm(el);
    })
  })
}


