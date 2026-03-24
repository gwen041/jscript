// let num = 100;

// while(num > 0) {
//   console.log(num);
//   num -= 10;
// }

//with user input

let firstNum;
let secondNum;

while (!firstNum) {
  firstNum = Number(prompt('Pick a number to start'));

  if (!isNaN(firstNum)) {
    break;
  }
  alert('Input must be a number');
}

while(!secondNum) {
  secondNum = Number(prompt('Pick a second number'));

  if (secondNum < firstNum && !isNaN(secondNum)) {
    break;
  }
  alert(`Input must be a number and lower than ${firstNum}`)
}

displayNums(firstNum, secondNum)

function displayNums(first, second) {
  for (let i = first; i >= second; i -= 10) {
  console.log(i);
  }
}

