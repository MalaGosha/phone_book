const confirm = document.querySelector('#confirm');
const popupConfirmDelete = document.querySelector('.popup_confirmDelete');


const showNameSurnameToConfirm = (divContact) => {
  const divContactToConfirmDelete = document.querySelector('#display_contact_to_delete');
  divContactToConfirmDelete.innerHTML = divContact.innerText;
  console.log("divContacttoDeleteConfirm " + divContactToConfirmDelete.innerHTML);
  console.log("divInnerText " + divContact.innerText);
}

const checkConfirm = (inputSurname, divContact) => {
  //const surname = inputSurname.target.value.toLowerCase();

}


confirm.addEventListener('keyup', checkConfirm);

overlay.addEventListener('click', event => {
    popupConfirmDelete.style.display = 'none';
    popupDeleteContact.style.display = 'block';
    overlay.style.display = 'block';
})
