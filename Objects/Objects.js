let userObject = {};
function createObj(key1, val1, key2, val2) {
  userObject = {
    [key1]: [val1].join(""),
    [key2]: [val2].join(""),
  }
  return userObject;
}
createObj(objkey1.value, objval1.value, objkey2.value, objval2.value);
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
