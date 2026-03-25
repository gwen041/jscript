let vessel = {
  LATITUDE: 40.07288,
  LONGITUDE: 154.48535,
  COURSE: 285.6,
  SPEED: 14.0,
  IMO: 9175717,
  NAME: 'MARENO'
};

for (let ves in vessel) {
  console.log(`${ves} -> ${vessel[ves]}`);
}

let person = {};
let fName = prompt('Enter your first name');
let lName = prompt('Enter your last name');
let gender = prompt('Enter your gender');
let bMonth = prompt('Enter your birth month');
let bYear;

do {
  bYear = Number(prompt('Enter your birth year'));
} 
while(isNaN(bYear));

person.FIRSTNAME = fName;
person.LASTNAME = lName;
person.GENDER = gender;
person.BIRTHMONTH = bMonth;
person.BIRTHYEAR = bYear;

for (let info in person) {
  console.log(`${info}: ${person[info]}`);
}