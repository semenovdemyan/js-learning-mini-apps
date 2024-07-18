// // Fn declaration

// // function greet(name) {
// //   console.log('Hello - ', name);
// // }

// //greet('Demian');

// //Fn expression
// // const greet2 = function (name) {
// //   console.log('2. Hello - ', name);
// // };
// // greet2('Demian');
// //console.dir(greet2) //dir показывает, какие есть методы и свойства у fn

// // setTimeout(function () {
// //   console.log('Timeout');
// // }, 3000);

// //setInterval(function () {
// //  console.log(1);
// //}, 2000);

// // let counter = 0;
// // setInterval(function () {
// //   if (counter === 5) {
// //     clearInterval(interval);
// //   } else {
// //     console.log(++counter);
// //   }
// // }, 2000);

// //Arrow Fn
// function greet(name) {
//   console.log('Hello - ', name);
// }

// const arrowFn = (name, age) => {
//   console.log('Hello - ', name, age);
// };
// arrowFn('Demian', 26);

// const arrowFn2 = (name) => console.log('Hello - ', name);

// function pow(num, exp) {
//   return Math.pow(num, exp);
// }

// const pow2 = (num, exp) => Math.pow(num, exp);

// console.log(pow(2, 3));

// // Default parameters
// const sum = (a, b) => a + b;
// console.log(sum(40, 2));
// // console.log(sum(40));

// function sumAll(...numbers) {
//   // let res = 0;
//   // for (let num of numbers) {
//   //   res += num;
//   // }
//   // return res;
//   return numbers.reduce((acc, cur)=> (acc += cur), 0)
// }
// console.log(sumAll(1, 2, 3, 4, 5, 6, 7));

// //Closures (замыкания)
// //Замыкание - это когда функция замыкает в себе значение, которое будет в дальнейшем использоваться (функция внутри функции).
// function createPerson(name) {
//   return function(lastName){
//     console.log(name + ' ' + lastName)
//   }
// }

// const addLastName = createPerson('Demian')
// addLastName('Semenov') //Demian Semenov
// addLastName('Minin') //Demian Minin