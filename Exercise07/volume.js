let width;
while (width <= 0 || isNaN(width)) {
  width = prompt('What is the width of the box?');
}
console.log(`${width} is valid`);

let height;
while (height <= 0 || isNaN(height)) {
  height = prompt('What is the height of the box?');
}
console.log(`${height} is valid`);

let length;
while (length <= 0 || isNaN(length)) {
  length = prompt('What is the length of the box?');
}
console.log(`${length} is valid`);

let volume = width * height * length;

alert(`${volume} is the volume of the box`);