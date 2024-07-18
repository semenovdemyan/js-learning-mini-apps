// const car = {
//   model: 'Tesla',
//   year: 2023,
// }

// const json = JSON.stringify(car)

// const parsed = JSON.parse(json)
// console.log(json)
// console.log(parsed)
const list = document.querySelector('#list');
const filter = document.querySelector('#filter');
let USERS = [];

filter.addEventListener('input', (event) => {
  // console.log('input', event.target.value);
  const value = event.target.value.toLowerCase();
  const filteredUsers = USERS.filter((user) => {
    return user.name.toLowerCase().includes(value);
  });
  render(filteredUsers);
});

async function start() {
  list.innerHTML = 'Loading...';
  try {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    setTimeout(() => {}, 2000);
    USERS = data;
    render(data);
  } catch (err) {
    list.innerHTML = 'Some Error, try again later';
  }
}

function render(users = []) {
  if (users.length === 0) {
    list.innerHTML = 'No matched users =(';
  } else {
    const html = users.map(toHTML).join('');
    list.innerHTML = html;
  }
}

function toHTML(user) {
  return `<li class="list-group-item">${user.name}</li>`;
}

start();
