function isSnakeCase(str) {
  return /_/.test(str);
}
function isCamelCase(str) {
  let result = str.match(/[A-Z]/g) || [];
  return result.length >= 2;
}
function isEmail(str) {
  return /[.-\w]+@([-\w]+\.)+[-\w]+/g.test(str);
}
function isPhoneNumber(str) {
  return /^(\+)?(\d{3})?-?\(\d{2}\)-?\d{3}-?\d{2}-?\d{2}/.test(str);
}
