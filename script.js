/* MDN JavaScript Function Active Learning Code */
let x = 1;

function a() {
  let y = 2;
  output(y);
}

function b() {
  let z = 3;
  output(z);
}

function output(value) {
  const para = document.createElement('p');
  document.body.appendChild(para);
  para.textContent = 'Value: ' + value;
}

function myBigFunction() {
  let myValue = 1;

  subFunction1(myValue);
  subFunction2(myValue);
  subFunction3(myValue);
}

function subFunction1(value) {
  console.log(value);
}

function subFunction2(value) {
  console.log(value);
}

function subFunction3(value) {
  console.log(value);
}

// Building your own function (MDN Active Learning)
function displayMessage(msgText, msgType) {
  const html = document.querySelector('html');

  const panel = document.createElement('div');
  panel.setAttribute('class', 'msgBox');
  html.appendChild(panel);

  const msg = document.createElement('p');
  msg.textContent = msgText;
  panel.appendChild(msg);

  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'x';
  panel.appendChild(closeBtn);

  closeBtn.onclick = function() {
    panel.parentNode.removeChild(panel);
  };

  if (msgType === 'warning') {
    msg.style.backgroundImage = 'url(icons/warning.png)';
    panel.style.backgroundColor = 'red';
  } else if (msgType === 'chat') {
    msg.style.backgroundImage = 'url(icons/chat.png)';
    panel.style.backgroundColor = 'aqua';
  } else {
    msg.style.paddingLeft = '20px';
  }
}

const btn = document.querySelector('button');
btn.onclick = function() {
  // displayMessage('Brian: Hi there, how are you today?', 'chat');
  displayMessage('Your inbox is almost full -- delete some emails', 'warning');
};
