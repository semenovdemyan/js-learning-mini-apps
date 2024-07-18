// console.log(new Date(0)); //Thu Jan 01 1970 03:00:00 GMT+0300

// const start = new Date(1000 * 60 * 60 * 24 * 365);
// console.log(start);

// const date = new Date(2011, 0, 10, 12, 42, 50);
// console.log(date); //Mon Jan 10 2011 12:42:50 GMT+0300
// console.log(now.getFullYear());
// console.log(now.getMonth()); // 4 (Май, указан индекс)
// console.log(now.getMilliseconds());

// now.setFullYear(2055);
// console.log(now.toDateString()); //Sun May 02 2055 00:46:07 GMT+0300
// console.log(now.toTimeString());
// console.log(now.toLocaleDateString());

let mode = 'full';

const output = document.getElementById('output');
const fullBtn = document.getElementById('full');
const dateBtn = document.getElementById('date');
const timeBtn = document.getElementById('time');

function bindMode(name) {
  return function () {
    mode = name;
    update();
  };
}

fullBtn.onclick = bindMode('full');
dateBtn.onclick = bindMode('date');
timeBtn.onclick = bindMode('time');

setInterval(update, 10);
update();

function update() {
  output.textContent = format(mode);
}

function format(formatMode) {
  const now = new Date();

  switch (formatMode) {
    case 'time':
      return now.toLocaleTimeString() /* + '.' + now.getMilliseconds()*/;
    case 'date':
      return now.toLocaleDateString();
    case 'full':
      return now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
    default:
      return now.toLocaleTimeString();
  }
}
