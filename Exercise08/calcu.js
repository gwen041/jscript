function userInput(message) {
  let input = Number(prompt(message, 0));

  while(Number.isNaN(input)) {
    alert('Input is not a number! Try again.');
    input = Number(prompt(message, 0));
  }

  return input;
}

let num1 = userInput('Enter the first number');
let num2 = userInput('Enter the second number');
let op = prompt('Choose an operation (+, -, *, /)');

calculate(num1, num2);


function calculate(num1, num2) {
  switch(op) {
    case '+':
      alert(num1 + num2);
      break;
    case '-':
      alert(num1 - num2);
      break;
    case '*':
      alert(num1 * num2);
      break;
    case '/':
      alert(num1 / num2);
      break;
    default:
      alert(`There's no ${op} operation`);
  }
}