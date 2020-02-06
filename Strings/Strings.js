function myStartsWith() {
  let workString = document.strings.inputString.value;
  let userInput = document.strings.userInput.value;
  let workInput = workString.slice(0,userInput.length);
  if (userInput == workInput){
    alert("This string really starts with '"+userInput+"' (my ver)");
  } else {alert("This string doesn't start with '"+userInput+"' (my ver)")}
}
function jsStartsWith() {
  let workString = document.strings.inputString.value;
  let userInput = document.strings.userInput.value;
  if (workString.startsWith(userInput)){
    alert("This string really starts with '"+userInput+"' (js ver)");
  } else {alert("This string doesn't start with '"+userInput+"' (js ver)")}
}
function myEndsWith() {
  let workString = document.strings.inputString.value;
  let userInput = document.strings.userInput.value;
  let workInput = workString.slice(-(userInput.length), workString.length);
  if (userInput == workInput){
    alert("This string really ends with '"+userInput+"' (my ver)");
  } else {alert("This string doesn't end with '"+userInput+"' (my ver)")}
}
function jsEndsWith() {
  let workString = document.strings.inputString.value;
  let userInput = document.strings.userInput.value;
  if (workString.endsWith(userInput)){
    alert("This string really ends with '"+userInput+"' (js ver)");
  } else {alert("This string doesn't end with '"+userInput+"' (js ver)")}
}
function isCamelCase() {
  let str = document.strings.inputCaseString.value;
  let camelCounter = 0;
  if (str.includes(" ") != 1) {
    for (let i = 0; i < str.length; i++) {
      if ((str.codePointAt(i) >= 65) && (str.codePointAt(i) <= 90)) {
        camelCounter += 1;
      }
    }
    if (camelCounter >= 2) {
      return alert("This is a camel case string");
    } else {
        return alert("This is not a camel case string");
    }
  } else {
      alert("Only input without spaces is allowed");
  }
}
function isSnakeCase() {
  let str = document.strings.inputCaseString.value;
  if (str.includes("_")) {
    return alert("This is a snake case string");
  } else {
    return alert("This is not a snake case string");
  }
}
function jsReverseString() {
  let str = document.strings.reverseStr.value;
  return alert(str.split("").reverse().join("")+" (JS ver)");
}
function myReverseString() {
  let str = document.strings.reverseStr.value;
  let reversedString = "";
  for (let i = str.length-1; i >= 0; i--){
    reversedString += str[i];
  }
  return alert(reversedString+" (My ver)");
}
function jsIsNaN() {
  let str = document.strings.inputCaseString.value;
    isNaN(str) ? alert("The string is NaN (js ver)") : alert("The string is a number (js ver)");
}
function myIsNaN() {
  let str = document.strings.inputCaseString.value;
  let nanCounter = 0;
  let notnanCounter = 0;
    for (let i = 0; i < str.length; i++) {
      if ((str.codePointAt(i) >= 48) && (str.codePointAt(i) <= 57)) {
        notnanCounter = 1;
      } else {
        nanCounter = 1;
      }
    }
    if (nanCounter == 1){
      return alert("The string is NaN (my ver)");
    } else if (notnanCounter == 1) {
      return alert("The string is a number (my ver)");
    }
}
