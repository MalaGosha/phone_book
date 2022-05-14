let sortBtn = document.getElementById('sort');
let textSort = document.getElementById('textSort');

const changeNameSortButton = (msg) => {
  textSort.innerHTML = msg;
}

const sortAllContacts = async () => {
  if(textSort.innerHTML === "Sortuj" || textSort.innerHTML === "Desc"){
    let descAllContacts = await getDescAllContact();
    await updateMainPageWithSortAllContacts(descAllContacts);
    changeNameSortButton("Asc");
    return descAllContacts;

  } else if(textSort.innerHTML === "Asc"){
    let ascAllContacts = await getAscAllContact();
    await updateMainPageWithSortAllContacts(ascAllContacts);
    changeNameSortButton("Desc");
    return ascAllContacts;
  }
}

const sortAllContactsToForm = async () => {
  if(textSort.innerHTML === "Sortuj" || textSort.innerHTML === "Desc"){
    let ascAllContactsToDelete = await getAscAllContact();
    return ascAllContactsToDelete;

  } else if(textSort.innerHTML === "Asc"){
    let descAllContactsToDelete = await getDescAllContact();
    return descAllContactsToDelete;
  }
}

sortBtn.addEventListener('click',  async () => {
  console.log("sort")
  await sortAllContacts();
})
