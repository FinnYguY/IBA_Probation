class Inherited extends Main{

  //show record of a current with the entered number
  showCurrentRecord(resource, number) {
    let url = ('https://jsonplaceholder.typicode.com' + `/${resource}` + `/${number}`);
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
  }

  //filter current resource by key and value
  filterByKeyAndValue(resource, key, value) {
    let url = ('https://jsonplaceholder.typicode.com' + `/${resource}` + `?${key}=${value}`);
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
  }

  //redirect to a page of a picture with the entered number
  async showPicture(number) {
    console.log("Processing... Wait a sec, please");
    let url = ('https://jsonplaceholder.typicode.com/photos' + `/${number}`);
    let response = await fetch(url)
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let photoUrl = jsonResponse.url;
    window.location.href = photoUrl;
  }

  //change the information of a selected record
  patchInfo(resource, number, key, value) {
    let url = ('https://jsonplaceholder.typicode.com' + `/${resource}` + `/${number}`);
    fetch(url, {
      method: 'PATCH',
      body: JSON.stringify({
        [key]: value
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => console.log(json))
  }

  //delete selected record
  deleteInfo(resource, number) {
    let url = ('https://jsonplaceholder.typicode.com' + `/${resource}` + `/${number}`);
    fetch(url, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(json => console.log(json))
    console.log(`Record №${number} deleted`);
  }
}
let inheritedClient = new Inherited();
