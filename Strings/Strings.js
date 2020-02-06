function myStartsWith(workString,userInput) {
  let workInput = workString.slice(0,userInput.length);
  return userInput == workInput;
}
function jsStartsWith(workString,userInput) {
  return workString.startsWith(userInput);
}
function myEndsWith(workString,userInput) {
  let workInput = workString.slice(-(userInput.length), workString.length);
  return userInput == workInput;
}
function jsEndsWith(workString,userInput) {
  return workString.endsWith(userInput);
}
function isCamelCase(str) {
  let camelCounter = 0;
  for (let i = 0; i < str.length; i++) {
    if ((str.codePointAt(i) >= 65) && (str.codePointAt(i) <= 90)) {
      camelCounter += 1;
    }
  }
  return camelCounter >= 2;
}
function isSnakeCase(str) {
  return str.includes("_");
}
function jsReverseString(str) {
  return str.split("").reverse().join("");
}
function myReverseString(str) {
  let reversedString = "";
  for (let i = str.length-1; i >= 0; i--){
    reversedString += str[i];
  }
  return reversedString;
}
function jsIsNaN(str) {
    return (isNaN(Number(str)) == 1);
}
function myIsNaN(str) {
  return((Number(str) !== Number(str)));
}
