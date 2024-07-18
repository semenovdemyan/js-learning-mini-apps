/*
// Theory

//const array = [1, 2, 3, 4, 5, 6, 20, 42]
//const arrayStrings = ['a','b','c', null, 12, (a+b)]

// console.log(array.length)
// console.log(array[1]) // 2
// console.log(array[10]) // undefined
//console.log(array[array.length - 1])

//insertAdjacentHTML - это функция с 2 параметрами. 1 - это то, куда нам нужно положить HTML, 2 - 
*/

/* //Object theory
const person = {
  firstName: 'Demian',
  lastName: 'Semenov',
  birthYear: 1997,
  hasCat: true,
  skills: ['JS','Python','React'],
  getFullName: ()=>{
    console.log(person.firstName + ' ' + person.lastName)
  }
}
person.getFullName()

console.log(person.birthYear)
console.log(person['skills']) // ['JS','Python','React']
const key = 'hasCat' //true
console.log(person[key])




*Object theory
console.log(person) //Object
//console.log(typeof notes) // Object

//console.log(typeof notes) // Object
*/

const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');

//console.log(inputElement.value)

//const notes = ['Записать блок про массивы', 'Рассказать теорию объектов'];

// function render() {
//   // for(let i = 0; i<notes.length; i++) {
//   //   listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
//   // }
//   for (let note of notes) {
//     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note));
//   }
// }

//render();

// createBtn.onclick = function () {
//   if (inputElement.value.length === 0) {
//     return;
//   }

//   listElement.insertAdjacentHTML(
//     'beforeend',
//     getNoteTemplate(inputElement.value)
//   );
//   inputElement.value = '';
// };

// function getNoteTemplate(title) {
//   return (
//     'beforeend',
//     `
//       <li class="list-group-item d-flex justify-content-between align-items-center">
//         <span>${title}</span>
//         <span>
//           <span class="btn btn-small btn-success">&check;</span>
//           <span class="btn btn-small btn-danger">&times;</span>
//         </span>
//       </li>
//     `
//   );
// }

const notes = [
  {
    title: 'Записать блок про массивы',
    completed: false,
  },
  {
    title: 'Рассказать теорию объектов',
    completed: true,
  },
];

function render() {
  listElement.innerHTML = '';
  if (notes.length === 0) {
    listElement.innerHTML = '<p>Напишите первую заметку<p>';
  }
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i));
  }
}
render();

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }
  const newNote = { title: inputElement.value, completed: false };
  inputElement.value = '';

  notes.push(newNote);
  render();
};

listElement.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index);
    const type = event.target.dataset.type;
    if (type === 'toggle') {
      notes[index].completed = !notes[index].completed;
    } else if (type === 'remove') {
      notes.splice(index, 1);
    }
  }
  render();
};
// При добавлении индекса к btn правильнее будет делать это через data-атрибут
function getNoteTemplate(note, index) {
  return (
    'beforeend',
    `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="${
          note.completed ? 'text-decoration-line-through' : ' '
        }">${note.title}</span>
        <span>
          <span class="btn btn-small border-black btn-${
            note.completed ? 'success' : 'white'
          }" data-index="${index}" data-type="toggle">&check;</span>
          <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
        </span>
      </li>  
    `
  );
}
