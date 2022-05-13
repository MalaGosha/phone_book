let recordNumberToIdMap = new Map();

function generateStructure(allContacts) {
  clearHTMLAreaContacts();
  clearInputs();
  console.log("size"+ allContacts.length)
  for (let index = 0; index < allContacts.length; index++) {
    let record = index + 1;
    let contact = allContacts[index];
    generateHTMLContact(record, contact);
    let id = contact.id;
    recordNumberToIdMap.set(record.toString(), id);
  }
}

function getRecordByContact(areaContact) {
  const record = areaContact.querySelector('#record');
  return record.innerHTML;
}

function getIdByRecord(record) {
  return recordNumberToIdMap.get(record);
}

