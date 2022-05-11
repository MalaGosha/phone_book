let GET = "GET";
let POST = "POST";

function sendNewContact(handleContact) {
  return fetch('http://localhost:8080/contact/', {
    method: POST,
    headers: {
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

