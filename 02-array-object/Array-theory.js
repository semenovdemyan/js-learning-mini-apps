//3:40:00
//const names = ['Demian', 'Elmira', 'Gordei', 'Hvostik'];

//names.push('Ivan')
//names.unshift('Igor')
//const firstName = names.shift()
//const name = names.pop()
//console.log('Names: ', names)

//console.log(names.reverse());
//const reversed = names.toReversed()
//console.log(reversed)

// const letters = ['e', 'c', 'd', 'b', 'a'];
// console.log(
//   letters.sort(function (a, b) {
//     return a.charCodeAt(0) - b.charCodeAt(0);
//   })
// );
// console.log(letters.toSorted());
// console.log(letters);

//console.log(names.splice(1, 2)) //splice принимает в себя индекс того элемента, с которым на м нужно начать работать.
//console.log(names.toSpliced(0, 2))
//console.log(names)

// const greatWoman = 'Elmira'
// const index = names.indexOf(greatWoman) //либо names.indexOf('Elmira')
// console.log(index)
// const newNames = names.with(index, 'Queen Elmira')
// console.log(index)
// names[index] = 'Queen Elmira'
// console.log(names[index])
//console.log(names);
//console.log(newNames);

// const capitalNames = names.map(function (name) {
//   //метод map всегда возвращает новый массив с изменёнными данными
//   const newName = name + '!';
//   return newName.toUpperCase();
// });
// console.log(capitalNames);

// const capitalNames = names.map(function (name, index) {
//   if (index === 1) {
//     return 'Queen Elmira';
//   }
//   return name;
// });
// console.log(capitalNames);

//console.log(names.includes('Igor'))
//console.log(names.indexOf('Igor') !== -1)

/*
const people = [
  { name: 'Demian', budget: 222 },
  { name: 'Elmira', budget: 8522 },
  { name: 'Hvostik', budget: 176 },
  { name: 'Tatiana', budget: 3298 },
  { name: 'Guzel', budget: 3241 },
];
*/

//let findedPerson;

// for (let person of people) {
//   if (person.budget === 3241) {
//     findedPerson = person;
//   }
// }

// const findedPerson = people.find(function (person) {
//   // if (person.budget === 3241) {
//   //   return true;
//   // }
//   return person.budget === 3241;
// });

//console.log(findedPerson);

//const finded = people.find((p)=> p.budget === 3241)
//console.log(finded)

//const finded = people.findIndex(function (person) {
// return person.budget === 3241;
// });
// console.log(people.with(finded, 42));

// let sumBudget = 0

// const filtered = people.filter((p) => p.budget > 3000);

// filtered.forEach(function(p) {
//   sumBudget += p.budget
// })
// console.log(filtered);

// console.log(sumBudget)

// const sumBudget = people
//   .filter((p) => p.budget > 3000)
//   .map((p) => p.budget)
//   .reduce((acc, p) => acc + p, 0);

// console.log(sumBudget);

/*
const string = 'Привет, как дела?'
const reversed = string
  .split('')
  .toReversed()
  .join('!')
  .split('')
  .filter((c) => c !== '!')
  .join('')

console.log(reversed)
*/


//ЧИСЛА, СТРОКИ И ДАТЫ 3:40:00
