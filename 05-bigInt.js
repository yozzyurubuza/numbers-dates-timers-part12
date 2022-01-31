'use strict';

// Working with bigInt

// Maximum number that JS can store
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

//JS cannot accurately display the correct integer
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

//Adding n in the last number converts it to bigInt
console.log(684684684651165151351351351351381n);
console.log(BigInt(68468468465));

//Operations
console.log(10000n + 10000n);
console.log(351684633515348648694631531531381n * 10000n);

// console.log(Math.sqrt(16n)); // Does not work

const huge = 2035053053153135503205n;
const num = 23;

//Cannot mix two different numbers (int and bigInt)
console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 15);
console.log(20n === 20); // false, because of different primitive types
console.log(typeof 20n);
console.log(20n == '20');

console.log(huge + ' is REALLY big!!!!');

// Divisions
console.log(11n / 3n); // Cuts off the decimal part
console.log(10 / 3);
