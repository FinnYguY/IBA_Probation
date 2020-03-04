class Main {

  constructor() {
    this.urlBegin = 'https://jsonplaceholder.typicode.com';
  }

  //method for outputting the fetch result
  async responseToConsole(response) {
    let jsonResponse1 = await response.json();
    console.log(jsonResponse1);
  }

  //show all records of selected resource
  async getAllRecords(resource) {
    let url = (this.urlBegin + `/${resource}`);
    this.responseToConsole(await fetch(url));
  }

  //post a record (available only for /posts resource)
  async postRecord(userID, userTitle, userBody) {
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
    }))
  }

  //count an amount of records of selected resource
  async countRecords(resource) {
    let url = (this.urlBegin + `/${resource}`);
    let response = await fetch(url);
    let jsonResponse = await response.json();
    let amount = jsonResponse.length;
    console.log(`There are ${amount} records in this resource`);
  }
}

let mainClient = new Main();
