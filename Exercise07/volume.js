let width = prompt('What is the width of the box?');
message1 = width >= 0 ? 'Valid' : 'Input is invalid';
console.log(message1);

let height = prompt('What is the height of the box?');
message2 = height >= 0 ? 'Valid' : 'Input is invalid';
console.log(message2);

let length = prompt('What is the length of the box?');
message3 = length >= 0 ? 'Valid' : 'Input is invalid';
console.log(message3);

let volume = width * height * length;

alert(`${volume} is the volume of the box`);