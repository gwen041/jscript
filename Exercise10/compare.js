let numbers = [50, 10, 40, 40, 30, 20];
let nums1 = [9, 24, 20, 10, 50, 10];
let nums2 = [1, 3, 5, 5, 7, 2];
// function compareNumbers(a, b) {
//      let retVal;
//      if (a < b) {
//       retVal = -1;
//      } else if(a > b) {
//       retVal = 1;
//      }
//      return retVal;
// }
// let sorted = numbers.sort(compareNumbers);
// console.log(sorted); // [10, 20, 30, 40, 50]

let compareNum = function(a, b) {
  let retVal;
  return a > b ? retVal = 1 : retVal = -1;
}

let sorted = numbers.sort(compareNum);
console.log(sorted);


// let compareNum1 = (a, b) => {
//   let retVal;
//   return a > b ? retVal = 1 : retVal = -1;
// }

// let sorted1 = nums1.sort(compareNum1);
// console.log(sorted1);


let retVal;

let compareNum2 = (a, b) => a > b ? retVal = 1 : retVal = -1; 

let sorted2 = nums2.sort(compareNum2);
console.log(sorted2);

//works but 0 is important

// 1
let compareNum3 = (a, b) => {
  return a - b;
}

let sorted3 = nums1.sort(compareNum3);
console.log(sorted3);

// 2
let compareNum4 = (a, b) => (a - b);
let sorted4 = nums2.sort(compareNum4);
console.log(sorted4);

// 3
console.log(numbers.sort((a, b) => a - b));