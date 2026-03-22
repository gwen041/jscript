let number = prompt('Pick a number', 0);
let message;

if (number > 90 && number < 110) {
  message = 'Bingo!';
}
else {
  message = 'Miss';
}

alert(message);

//ternary version

let message2 = (number > 90 && number < 110) ? 'Bingo!' : 'Miss';
alert(message2);