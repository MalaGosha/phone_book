const search = document.querySelector('.search');

const searchContact = e => {
  const areaContact = document.querySelectorAll('.area_contact');

  const searchValue = e.target.value.toLowerCase();

  areaContact.forEach(el => {
    if(el.textContent.toLowerCase().indexOf(searchValue) !== -1) {
      el.style.display = 'flex';
    } else {
      el.style.display = 'none';
    }
  })

}

const showFilteredContactsToGrid = e => {
  const areaContactDelete = document.querySelectorAll('.area_contactDelete');
  const searchValue = e.target.value.toLowerCase();

  areaContactDelete.forEach(el => {
    if(el.textContent.toLowerCase().indexOf(searchValue) !== -1) {
      el.style.display = 'flex';
    } else {
      el.style.display = 'none';
    }
  })

}

search.addEventListener('keyup', searchContact);














