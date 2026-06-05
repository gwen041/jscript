let numbers = [50, 10, 40, 40, 30, 20];
let num2 = [1, 2, 2, 0, 10, 99];

let compareNums = (a, b) => {
  return b - a;
}

console.log(numbers.sort(compareNums));

let compareNum2 = (a, b) => b - a;

console.log(num2.sort(compareNum2));

console.log(numbers.sort((a, b) => b - a));

//descending order