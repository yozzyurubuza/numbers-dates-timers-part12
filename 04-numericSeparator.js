'use strict';

// Numeric Separator

// 287,460,000,000
// JS ignores the underscore
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

// Can only place _ between numbers
// Cannot place two _ together
const PI = 3.1415;
console.log(PI);

// Cannot convert string with _ - returns NaN
console.log(Number('230000'));
console.log(Number('230_000'));

console.log(parseInt('230_000')); // Returns 230, but ignores _000
