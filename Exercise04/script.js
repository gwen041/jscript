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

let str2 = '1234';
let s2 = String(str2);
let n2 = Number(s2);
let bi2 = BigInt(n2);
let b2 = Boolean(bi2);

console.log(`${typeof str2} : ${str2}`);
console.log(`${typeof s2} : ${s2}`);
console.log(`${typeof n2} : ${n2}`);
console.log(`${typeof bi2} : ${bi2}`);
console.log(`${typeof b2} : ${b2}`);

let chain = Boolean(BigInt(Number('1234')));
console.log(`${typeof chain} : ${chain}`);