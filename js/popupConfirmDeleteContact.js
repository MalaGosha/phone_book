
const popupConfirmDelete = document.querySelector('.popup_confirmDelete');


const checkConfirm = () => {
  const confirm = document.querySelector('#confirm');
  const listContactsId = document.querySelectorAll('#id');

  listContactsId.forEach(id => {
    if (id === confirm) {
      console.log("blaksandsbdsjdsjhd")
    }
  })

  console.log('confirmID to -' + confirm.id);
  console.log('listContactsId - ' + listContactsId[0])


}

checkConfirm()

overlay.addEventListener('click', event => {
    popupConfirmDelete.style.display = 'none';
    popupDeleteContact.style.display = 'block';
    overlay.style.display = 'block';
})
