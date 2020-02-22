let userObject = {};
let userArrOfObj = {};
function createObj(key1, val1, key2, val2) {
  userObject = {
    [key1]: [val1].join(""),
    [key2]: [val2].join(""),
  }
  return userObject;
}

function createArrayOfObjects(key1, val1, key2, val2, key3, val3, key4, val4, key5, val5, key6, val6) {
  userArrOfObj = [{
    [key1]: [val1].join(""),
    [key2]: [val2].join(""),
  },
  {
    [key3]: [val3].join(""),
    [key4]: [val4].join(""),
  },
  {
    [key5]: [val5].join(""),
    [key6]: [val6].join(""),
  }]
  console.log(userArrOfObj);
  return userArrOfObj;
}
createObj(objkey1.value, objval1.value, objkey2.value, objval2.value);
createArrayOfObjects(arrobjkey1.value, arrobjval1.value, arrobjkey2.value, arrobjval2.value,
  arrobjkey3.value, arrobjval3.value, arrobjkey4.value, arrobjval4.value,
  arrobjkey5.value, arrobjval5.value, arrobjkey6.value, arrobjval6.value);

function isObject(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (!(key && obj[key])) {
        return false;
      }
    }
  } return true;
}

function isFunction(fun) {
  return fun instanceof Function;
}

function objectKeys(obj) {
  return Object.keys(obj);
}

function objectValues(obj) {
  return Object.values(obj);
}

function objectEntries(obj) {
  return Object.entries(obj);
}

function objToArr(obj) {
  let map = new Map(Object.entries(obj));
  return Array.from(map);
}

function arrToObj(str) {
  let workArr = str.split(" ");
  let workObj = Object.assign({}, workArr);
  return Object.entries(workObj);
}

function filterByValue(arr, condition) {
  let conditionObj = {
    age: [condition],
  }
  userArrOfObj = arr.filter(function(item) {
    for (let key in conditionObj) {
      if (item[key] === undefined || item[key] != conditionObj[key])
        return false;
    }
  return true;
  });
  return userArrOfObj;
  // let result = [];
  // for (let prop in conditionObj) {
  //   if (conditionObj.hasOwnProperty(prop)) {
  //     for (let i = 0; i < 1; i++) {
  //       console.log("for");
  //       if (arr[i][prop] === conditionObj[prop]) {
  //         result.push(arr[i]);
  //         console.log("last if");
  //       }
  //     }
  //   }
  // }
  // return result;
}
