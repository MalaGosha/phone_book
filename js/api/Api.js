const GET = "GET";
const POST = "POST";
const DELETE = "DELETE";

function sendNewContact(handleContact) {
  return fetch('http://localhost:8080/contact/', {
    method: POST,
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify(handleContact)
  })
    .then((response) => {
      console.log(response.status)
      return response.text()
    })
    .then((text) => {
      console.log('creted ' + text)
      return text
    });
}

function getAllContacts() {
  return fetch('http://localhost:8080/contact/all', {
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    }
  })
    .then((response) => {
      return response.json()
    });
}


function deleteContactFromArray(contactToDelete) {
  return fetch('http://localhost:8080/contact/'+ contactToDelete, {
    method: DELETE,
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    }
  })
    .then((response) => {
      console.log(response.status)
      return response.text()
    })
    .then((text) => {
      console.log('deleted ' + text)
      return text
    });
}
