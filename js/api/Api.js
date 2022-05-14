const POST = "POST";
const DELETE = "DELETE";
const PUT = "PUT";

async function sendNewContact(handleContact) {
  return fetch('http://localhost:8080/contact/', {
    method: POST,
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify(handleContact)
  }).then((response) => {
    console.log("Status code create " + response.status)
    return response.json()
  });
}

async function getContactById(id) {
  return fetch('http://localhost:8080/contact/' + id,{
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    }
  }).then((response) => {
    console.log("Status code get one contact " + response.status)
    return response.json()
  });
}

async function deleteContactFromDB(id) {
  return fetch('http://localhost:8080/contact/' + id, {
    method: DELETE,
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    }
  }).then((response) => {
      console.log("Status deleted contact " + response.status);
    })
}

async function editContactWithNewData(id, contactWithNewData){
    return fetch('http://localhost:8080/contact/' + id, {
    method: PUT,
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify(contactWithNewData)
  }).then((response) => {
      console.log("Status code put change one contact " + response.status)
      console.log("edit successful" + id)
      return response.json()
    })
}

async function getAscAllContact(){
  return fetch('http://localhost:8080/contact/all/asc',{
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    }
  }).then((response) =>{
    console.log("Status code get asc all contacts" + response.status)
    return response.json()
  })
}

async function getDescAllContact(){
  return fetch('http://localhost:8080/contact/all/desc',{
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    }
  }).then((response) =>{
    console.log("Status code get desc all contacts" + response.status)
    return response.json()
  })
}
