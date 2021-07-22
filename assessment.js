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
let color = 'blue';

// Add your code here

// Don't edit the code below here!

const section2 = document.querySelector('.preview');
