  let isOpen = true;
  let isAdmin = false;
  let b = isOpen + isAdmin;

  let num1 = 14;
  let num2 = 56;
  let n = num1 + num2;

  let bi1 = 12000n;
  let bi2 = 1300n;
  let bi = bi1 + bi2;

  let str1 = 'jes';
  let str2 = 'gwen';
  let str = str1 + str2;

  let a = undefined + undefined;

  console.log(`${b} [${typeof b}]`);
  console.log(`${n} [${typeof n}]`);
  console.log(`${bi} [${typeof bi}]`);
  console.log(`${str} [${typeof str}]`);
  console.log(`${a} [${typeof a}]`);

  let boolNum = true + 14;
  // let numBi = 56 + 12000n;
  let biStr = 1300n + 'jes';
  let strBool = 'gwen' + false;
  let numStr = 140 + '806';
  let numBool = 15 + false;

  console.log(`${boolNum} [${typeof boolNum}]`);
  console.log(`${biStr} [${typeof biStr}]`);
  console.log(`${strBool} [${typeof strBool}]`);
  console.log(`${numStr} [${typeof numStr}]`);
  console.log(`${numBool} [${typeof numBool}]`);