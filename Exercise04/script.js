let isValid = true;
let b1 = Boolean(isValid);

let num = 14;
let n1 = Number(num);

let bigNum = 10n;
let bi1 = BigInt(bigNum);

let str = 'uno';
let s1 = String(str);

let num2 = undefined;

console.log(`${isValid} [${typeof isValid}]`);
console.log(`${b1} [${typeof b1}]`);

console.log(`${num} [${typeof num}]`);
console.log(`${n1} [${typeof n1}]`);

console.log(`${bigNum} [${typeof bigNum}]`);
console.log(`${bi1} [${typeof bi1}]`);

console.log(`${str} [${typeof str}]`);
console.log(`${s1} [${typeof s1}]`);

console.log(`${num2} [${typeof num2}]`);