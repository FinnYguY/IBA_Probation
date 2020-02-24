let userObject = {};
var userArrOfObj = [];
function createObj(key1, val1, key2, val2) {
  userObject = {
    [key1]: [val1].join(""),
    [key2]: [val2].join(""),
  }
  return userObject;
}

// function createArrayOfObjects(key1, val1, key2, val2, key3, val3, key4, val4, key5, val5, key6, val6) {
//   userArrOfObj = [{
//     [key1]: [val1].join(""),
//     [key2]: [val2].join(""),
//   },
//   {
//     [key3]: [val3].join(""),
//     [key4]: [val4].join(""),
//   },
//   {
//     [key5]: [val5].join(""),
//     [key6]: [val6].join(""),
//   }]
//   console.log(userArrOfObj);
//   return userArrOfObj;
// }
// createObj(objkey1.value, objval1.value, objkey2.value, objval2.value);
// createArrayOfObjects(arrobjkey1.value, arrobjval1.value, arrobjkey2.value, arrobjval2.value,
//   arrobjkey3.value, arrobjval3.value, arrobjkey4.value, arrobjval4.value,
//   arrobjkey5.value, arrobjval5.value, arrobjkey6.value, arrobjval6.value);


function addObject() {
  // var keyArr = document.getElementsByClassName("key");
  var keyArr = ["name", "age", "city", "country"];
  var valArr = document.getElementsByClassName("val");
  let arrObj = {};
  for (let i = 0; i < keyArr.length; i++){
    arrObj[keyArr[i]] = valArr[i].value;
  }
  userArrOfObj.push(arrObj);
  console.log(userArrOfObj);
}

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

// function filterByPair(arr, name1, value1, name2, value2) {
//   let conditionObj = {
//     [name1]: [value1],
//   }
//   if (name2 != "" && value2 != "") {
//     conditionObj[name2] = value2;
//   }
//   arr = arr.filter(function(item) {
//     for (let key in conditionObj) {
//       if (item[key] != conditionObj[key]) {
//         return false;
//       }
//     }
//   return true;
//   });
//   return arr;
// }

function filterByPair(arr) {
  var condKeyArr = document.getElementsByClassName("condKey");
  var condValArr = document.getElementsByClassName("condVal");
  let conditionObj = {};
  for (let i = 0; i < condKeyArr.length; i++){
    conditionObj[condKeyArr[i].value] = condValArr[i].value;
    if (i + 1 < condKeyArr.length) {
      break;
    }
  }
  arr = arr.filter(function(item) {
    for (let key in conditionObj) {
      if (item[key] != conditionObj[key]) {
        return false;
      }
    }
  return true;
  });
  return arr;
}
