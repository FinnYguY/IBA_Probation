class Inherited extends Main{

  showCurrentRecord(resource, number) {
    let url = ('https://jsonplaceholder.typicode.com' + `/${resource}` + `/${number}`);
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
  }

  filterByKeyAndValue(resource, key, value) {
    let url = ('https://jsonplaceholder.typicode.com' + `/${resource}` + `?${key}=${value}`);
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
  }

  async showPicture(number) {
    let url = ('https://jsonplaceholder.typicode.com/photos' + `/${number}`);
    let response = await fetch(url)
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let photoUrl = jsonResponse.url;
    window.location.href = photoUrl;
  }

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
