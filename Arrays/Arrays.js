function initial(array, n) {
  n = n || 1;
  let workArray = array.split(" ");
  let resultArray = [];
  for (let i = 0; i < workArray.length - n; i++) {
    resultArray[i] = workArray[i];
  }
  return resultArray.join("  ");
}
// function compact(array) {
//   let workArray = array.split(" ");
//   for (let i = 0; i < workArray.length; i++){
//     if (workArray[i] == 0 || workArray[i] == false || workArray[i] == "false" ||
//     workArray[i] == undefined || workArray[i] == "undefined" ||
//     workArray[i] == null || workArray[i] == "null") {
//       delete workArray[i];
//     }
//   }
//   let filtered = workArray.filter(function (element) {
//     return element != null;
//   });
//   return filtered.join("  ");
// }
function compact(array) {
  let workArray = array.split(" ");
  return workArray.filter(Number).join("  ");
}
function union(array1, array2, array3, array4) {
  let resultArray = [];
  let workArray = [];
  let workArray1 = array1.split(" ");
  let workArray2 = array2.split(" ");
  let workArray3 = array3.split(" ");
  let workArray4 = array4.split(" ");
  workArray = workArray.concat(workArray1, workArray2, workArray3, workArray4);
  for (let unique of workArray) {
    if (!resultArray.includes(unique)) {
      resultArray.push(unique);
    }
  }
  return resultArray;
}
function range(start, end, step) {
  start = +start || 0;
  end = +end || 0;
  step = +step || 1;
  let workRange = [];
  let i = 0;
  if (end == 0) {
    while (i < start) {
      workRange.push(i);
      i += step;
    }
  } else {
    if (start < end) {
      i = start;
      while (i < end) {
        workRange.push(i);
        i += step;
      }
    } else return false;
  }
  return workRange.join("  ");
}
