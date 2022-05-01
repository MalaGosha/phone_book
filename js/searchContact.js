const search = document.querySelector('.search');

const searchContact = e => {
  const li = document.querySelectorAll('li');
  console.log(li);

  const searchValue = e.target.value.toLowerCase();
  console.log(searchValue)

  li.forEach(el => {
    if(el.textContent.indexOf(searchValue) !== -1) {
      el.style.display = 'flex';
    } else {
      el.style.display = 'none';
    }
  })
}

search.addEventListener('keyup', searchContact);














