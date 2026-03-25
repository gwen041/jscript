let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

let allNum = confirm('Would you like to print all numbers?');

if(allNum) {
  for (let nums of numbers) {
    console.log(nums);
  }
}
else {
  console.log('False');
}

let even = confirm('Would you like to print even numbers only?');

if(even) {
  evenNums();
}
else {
  console.log('False');
}

function evenNums() {
  console.log('The Even Numbers are: ');
  for (let nums of numbers) {
    if (nums % 2 == 0) {
      console.log(`${nums} `)
    }
  }
}

let condition = confirm('Print numbers > 10 and < 60?');

if (condition) {
  displayCond();
}
else {
  console.log('False');
}

function displayCond() {
  console.log('Numbers that are > 10 and < 60: ');
  for (let nums of numbers) {
    if (nums > 10 && nums < 60) {
      console.log(`${nums} `);
    }
  }
}