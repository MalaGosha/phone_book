function formatDate(date) {
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [day, month, year].join('-');
}

showModificationDate = async () => {
  let contact = await getContact(id);
  contact.modificationDate = Date.now();
  const editDate = document.querySelector('.lastModificationDate');
  editDate.innerHTML = formatDate(contact.modificationDate);
  const showEditDate = document.getElementById('modificationDate');
  showEditDate.style.display = 'block';
}
