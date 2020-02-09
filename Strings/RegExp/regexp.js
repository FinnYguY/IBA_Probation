function isSnakeCase(str) {
  return /_/.test(str);
}
function isCamelCase(str) {
  let result = str.match(/[A-Z]/g) || [];
  return result.length >= 2;
}
function isEmail(str) {
  return /\w\w\w\w@\w\w/.test(str);
}
function isPhoneNumber(str) {
  return /[(\d\d)-\d\d\d-\d\d-\d\d][+\d\d\d(\d\d)\d\d\d\d\d\d\d]/.test(str);
}
