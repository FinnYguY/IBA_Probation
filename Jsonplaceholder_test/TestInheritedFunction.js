function Inherited() {

  Main.call(this)

  //show record of a current with the entered number
  this.showCurrentRecord = async function(resource, number) {
    let url = (this.urlBegin + `/${resource}` + `/${number}`);
    this.responseToConsole(await fetch(url));
  }

  //filter current resource by key and value
  this.filterByKeyAndValue = async function(resource, key, value) {
    let url = (this.urlBegin + `/${resource}` + `?${key}=${value}`);
    this.responseToConsole(await fetch(url));
  }

  //redirect to a page of a picture with the entered number
  this.showPicture = async function(number) {
    console.log("Processing... Wait a sec, please");
    let url = (this.urlBegin+ '/photos' + `/${number}`);
    let response = await fetch(url)
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let photoUrl = jsonResponse.url;
    window.location.href = photoUrl;
  }

  //change the information of a selected record
  this.patchInfo = async function(resource, number, key, value) {
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
  this.deleteInfo = async function(resource, number) {
    console.log("Processing... Wait a sec, please");
    let url = (this.urlBegin + `/${resource}` + `/${number}`);
    this.responseToConsole(await fetch(url, {
      method: 'DELETE'
    }))
    console.log(`Record №${number} deleted`);
  }
}

var inheritedClient = new Inherited();
