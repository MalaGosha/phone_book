let GET = "GET";

// Działa z błędem CORS --> strict-origin-when-cross-origin - zmiana odnośnie polityki prywatności
function getContactString() {
  let request = new XMLHttpRequest();
  //request.responseType = 'json'
  request.open(GET, 'http://localhost:8080/contact/all', true)
  request.onload = function () {
    let data = request.response;
    console.log(data)
  }
  request.send()
  return request.responseText
}



/*
function getContactString(){
  fetch("http://localhost:8080/contact/all")
    .then(response => {
      if(!response.ok){
        console.log("error")
      }
      console.log("ok")
    })
    .then()
}
*/






















/*
function getContactString(){
  let request = new XMLHttpRequest();
  request.open(GET,'http://localhost:8080/contact/string',true);
  request.send(null);
  request.onreadystatechange = function () {
    console.log("a")
    if (request.readyState === 4){
      console.log(request.responseText)
      return request.responseText;
    }
  };


}*/
/*
function abc() {
  fetch('http://localhost:8080/contact/string', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      return console.log(response.text());
    })

}*/
