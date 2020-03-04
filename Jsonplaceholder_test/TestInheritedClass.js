class Inherited extends Main{

  //show record of a current with the entered number
  async showCurrentRecord(resource, number) {
    let url = (this.urlBegin + `/${resource}` + `/${number}`);
    this.responseToConsole(await fetch(url));
  }

  //filter current resource by key and value
  async filterByKeyAndValue(resource, key, value) {
    let url = (this.urlBegin + `/${resource}` + `?${key}=${value}`);
    this.responseToConsole(await fetch(url));
  }

  //redirect to a page of a picture with the entered number
  async showPicture(number) {
    console.log("Processing... Wait a sec, please");
    let url = (this.urlBegin+ '/photos' + `/${number}`);
    let response = await fetch(url)
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let photoUrl = jsonResponse.url;
    window.location.href = photoUrl;
  }

  //change the information of a selected record
  async patchInfo(resource, number, key, value) {
    let url = (this.urlBegin + `/${resource}` + `/${number}`);
    this.responseToConsole(await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify({
        [key]: value
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }));
  }

  //delete selected record
  async deleteInfo(resource, number) {
    console.log("Processing... Wait a sec, please");
    let url = (this.urlBegin + `/${resource}` + `/${number}`);
    this.responseToConsole(await fetch(url, {
      method: 'DELETE'
    }))
    console.log(`Record №${number} deleted`);
  }
}

let inheritedClient = new Inherited();
