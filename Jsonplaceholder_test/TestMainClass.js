class Main {
  //show all records of selected resource
  getAllRecords(resource) {
    let url = ('https://jsonplaceholder.typicode.com' + `/${resource}`);
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
  }

  //post a record (available only for /posts resource)
  postRecord(userID, userTitle, userBody) {
    let url = ('https://jsonplaceholder.typicode.com/posts');
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        title: userTitle,
        body: userBody,
        userId: userID
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => console.log(json))
  }

  //count an amount of records of selected resource
  async countRecords(resource) {
    let url = ('https://jsonplaceholder.typicode.com' + `/${resource}`);
    let response = await fetch(url);
    let jsonResponse = await response.json();
    let amount = jsonResponse.length;
    console.log(`There are ${amount} records in this resource`);
  }
}

let mainClient = new Main();
