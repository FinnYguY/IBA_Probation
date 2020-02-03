function Sum(a,b) {
  return a + b;
}
function Sub(a,b) {
  return a - b;
}
function Mul(a,b) {
  return a * b;
}
function Percent(a,b) {
  return (a * b)/100;
}
function Div(a,b) {
  return a/b;
}
function IntegerDiv(a,b) {
  return Math.floor(a/b);
}
function Abs(a) {
  return Math.abs(a);
}
function Sqr(a) {
  return a ** 2;
}
function Factorial(a) {
  let fact = 1;
  for (let i = 1; i<=a; i++){
    fact *= i;
  }
  return fact;
}
function Round(a) {
  return Math.round(a);
}
function Sin(a) {
  return Math.sin(a);
}
function Cos(a) {
  return Math.cos(a);
}
function Tg(a) {
  return Math.tan(a);
}
function Ctg(a) {
  return 1/(Math.tan(a));
}
let funcRes;
let question;
question = 1;
while (question) {
  question = prompt("Choose a function to check from the list below:");
  switch (+question) {
    case 1:
      funcRes = Sum(1,2);
      alert("1 + 2 = "+funcRes);
      break;
    case 2:
      funcRes = Sub(2,1);
      alert("2 - 1 = "+funcRes);
      break;
    case 3:
      funcRes = Mul(5,3);
      alert("5 * 3 = "+funcRes);
      break;
    case 4:
      funcRes = Percent(10,5);
      alert("10 % of 5 is "+funcRes);
      break;
    case 5:
      funcRes = Div(1,2);
      alert("1 / 2 = "+funcRes);
      break;
    case 6:
      funcRes = IntegerDiv(9,4);
      alert("Simple division 9 / 4 = "+funcRes);
      break;
    case 7:
      funcRes = Abs(-1);
      alert("|-1| = "+funcRes);
      break;
    case 8:
      funcRes = Sqr(2);
      alert("Square of 2 is = "+funcRes);
      break;
    case 9:
      funcRes = Factorial(3);
      alert("3! = "+funcRes);
      break;
    case 10:
      funcRes = Round(3.6);
      alert("3.6 is almost equal to "+funcRes);
      break;
    case 11:
      funcRes = Sin(0.5);
      alert("Sin(0.5) = "+funcRes);
      break;
    case 12:
      funcRes = Cos(0.5);
      alert("Cos(0.5) = "+funcRes);
      break;
    case 13:
      funcRes = Tg(0.5);
      alert("Tg(0.5) = "+funcRes);
      break;
    case 14:
      funcRes = Ctg(0.5);
      alert("Ctg(0.5) = "+funcRes);
      break;
    default:
      question = 0;
      break;
  }
}
