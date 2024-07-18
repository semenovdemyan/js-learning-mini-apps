//3:49:00
/*
const num = 42; //integer
const float = 42.42; // float
const pow = 10e3;
const big = 1_000_000;
const negative = -10;

console.log(Number.MAX_SAFE_INTEGER);
console.log(Math.pow(2, 53) - 1);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(1 / 0); //Infinity
console.log(Number.isFinite(1 / 0)); //false
console.log(Number.isFinite(Infinity)); //false
console.log(23 / undefined); // NaN
console.log(Number.isNaN('Demian')); // true
console.log(Number.isNaN(23)); // false
*/

//PARSE
// const strInt = '42';
// const strFloat = '42.42';

// console.log(Number(strInt));
// console.log(Number(strFloat));
// console.log(parseInt(strInt)); // 42
// console.log(parseInt(strFloat)); // 42
// console.log(+strInt, +strFloat) // 42 42.42

// console.log((0.1 + 0.2).toFixed(5)); // '0.30000'
// console.log(parseFloat((0.1 + 0.2).toFixed(1))); // 0.3

//BigInt
//console.log(BigInt(Number.MAX_SAFE_INTEGER) + 25235); // Error
// console.log(-BigInt(Number.MAX_SAFE_INTEGER) + 25235n);
//BigInt работает только с BigInt, оно не может быть дробным (только целые числа)
// console.log(parseInt(10n) - 4); // 6
// console.log(5n / 2n); // 2n

//Math
// console.log(Math.E);
// console.log(Math.PI);

// console.log(Math.sqrt(25)); //5
// console.log(Math.pow(2, 3)); // 8
// console.log(Math.abs(-42)); // 42
// console.log(Math.max(2, 3, 5, 54, 453, 0)); //453
// console.log(Math.min(2, 3, 5, 54, 453, 0)); //0

// const myNum = 4.9;
// console.log(Math.floor(myNum)); //4
// console.log(Math.ceil(myNum)); // 5
// console.log(Math.round(4.2));
// console.log(Math.round(4.5));
// console.log(Math.random());
// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// const num1 = getRandomNumber(10, 100);
// console.log(num1);
