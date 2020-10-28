// switch
switch (something) {
  case 1:
    doThis();
    break;
  case 2:
    doThat();
    break;
}

// shorthand
let cases = {
  1: doThis(),
  2: doThat(),
}

// ternary operator
let hungry = true;
let eat = hungry === true ? 'yes' : 'no';

//convert to boolean
const isTrue = !0;
const alsoFalse = !!0
//Result: true
// typeof isTrue: "boolean"

//removing last digits
const int = 1553 / 10 | 0;
// Result: 155


//float to int
const int = 19.8 | 0;
// Result: 19
// typeof int: "nubmer"

  // auto inherited properties ********
  // String
  .concat()
  .charAt()
  .indexOf()
  .startsWith()
  .endsWith()
  .split()
  .slice()
  // Number
  .toFixed()
  .toPrecision()
  .toString()
  // Boolean
  .toString()
  // Array
  .filter()
  .map()
  .find()
  .every()
  .some()
  .sort()
  .slice()
  .splice()
  .reduce()
  .forEach();
// Math
Math.pow(2, 3); //8
Math.sqrt(16); //4
Math.min(7, 8, 6); //6
Math.max(7, 8, 6); //8
Math.floor(123.45); //123
Math.ceil(123.45); //124
Math.round(123.45); //123
Math.random();
// Date
const date = new Date('20/01/1998');
date.getDay();
date.getFullYear();
date.getMonth();
Date.now(); // Milliseconds since jan 1,1970
