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

const section = document.querySelector('.assessment');

section.appendChild(para);
