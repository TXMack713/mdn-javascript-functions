// MDN JavaScript Functions Assessment 1

let names = [
  'Chris',
  'Li Kang',
  'Anne',
  'Francesca',
  'Mustafa',
  'Tina',
  'Bert',
  'Jada'
];
let para = document.createElement('p');

// Add your code here

para.textContent = names[Math.floor(Math.random() * names.length)];

// Don't edit the code below here!

const section = document.querySelector('.assessment1');

section.appendChild(para);

// MDN JavaScript Functions Assessment 2

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let x = 50;
let y = 60;
let width = 100;
let height = 75;
let color = rgb(Math.floor(Math.random()*255), Math.floor(Math.random()*255), Math.floor(Math.random()*255));

// Add your code here
ctx.beginPath();
ctx.rect(x, y, width, height);
ctx.fillStyle = color;
ctx.fill();

// Don't edit the code below here!

const section2 = document.querySelector('.preview');

// MDN JavaScript Functions Assessment 3

let nameArray = [
  'Chris',
  'Li Kang',
  'Anne',
  'Francesca',
  'Mustafa',
  'Tina',
  'Bert',
  'Jada'
];
let para2 = document.createElement('p');

// Add your code here
function random(num1, num2) {
  let spot = 0;
  if (num1 <= num2) {
    while (!(spot >= num1 && spot <= num2)) {
      spot = Math.floor(Math.random() * num2);
    }
  } else if (num1 >= num2) {
    while (!(spot >= num2 && spot <= num1)) {
      spot = Math.floor(Math.random() * num1);
    }
  }

  return spot;
}

function chooseName(array) {
  let index = random(
    Math.floor(Math.random() * array.length),
    Math.floor(Math.random() * array.length)
  );
  return array[index];
}

let name = chooseName(nameArray);
para2.textContent = name;

// Don't edit the code below here!

const section3 = document.querySelector('.assessment3');

section3.appendChild(para2);
