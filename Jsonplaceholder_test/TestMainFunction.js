function Main() {

  // this.constructor = function() {
  //   this.urlBegin = 'https://jsonplaceholder.typicode.com';
  // }

  this.urlBegin = 'https://jsonplaceholder.typicode.com';

  //method for outputting the fetch result
  this.responseToConsole = async function(response) {
    let jsonResponse1 = await response.json();
    console.log(jsonResponse1);
  }

  //show all records of selected resource
  this.getAllRecords = async function(resource) {
    console.log("Processing...");
      let url = (this.urlBegin + `/${resource}`);
      this.responseToConsole(await fetch(url).catch(err => alert(servErrMsg)));
  }

  //post a record (available only for /posts resource)
  this.postRecord = async function(userID, userTitle, userBody) {
    console.log("Processing...");
    let url = (this.urlBegin + '/posts');
    this.responseToConsole(await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        title: userTitle,
        body: userBody,
        userId: userID
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).catch(err => alert(servErrMsg)))
  }

  //count an amount of records of selected resource
  this.countRecords = async function(resource) {
    console.log("Processing...");
    let url = (this.urlBegin + `/${resource}`);
    let response = await fetch(url).catch(err => alert(servErrMsg));
    let jsonResponse = await response.json();
    let amount = jsonResponse.length;
    console.log(`There are ${amount} records in this resource`);
  }
}

let mainClient = new Main();
