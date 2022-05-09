const currentDate = document.querySelector('.current_date');
const lastModificationDate = document.querySelector('.lastModificationDate');

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

const showModificationDate = (areaContact) => {
  let contact = getIdContactToEdit(areaContact);
  let firstDateContactCreate = contact.createDate;
  console.log("Aaaaa" + contact)
  currentDate.innerHTML = formatDate(firstDateContactCreate);




/*
  let lastModificationDateContact = contact.modificationDate;
  lastModificationDate.innerHTML = formatDate(lastModificationDateContact);*/
}
