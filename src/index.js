import "./css/style.css"

const wrapper = document.getElementById('wrapper')
const textarea =  document.createElement('textarea');
wrapper.append(textarea);



function createButton(configBtn, container = null) {
  const div = document.createElement('div');
  div.className = 'button'
  div.style.width = configBtn.width;
  div.id = configBtn.code
  // container.append(div);

  const divForUp = document.createElement('div');
  divForUp.innerHTML = configBtn.letterUp;
  div.append(divForUp);

  const divForDown = document.createElement('div');
  divForDown.innerHTML = configBtn.letterDown;
  div.append(divForDown);



  return div;
}

let letters = [
  {
    letterUp: '',
    letterDown: '~',
    code: 'IntlBackslash',
    width: '45px'
  },
  {
    letterUp: '!',
    letterDown: '1',
    code: 'Digit1',
    width: '45px'
  },
  {
    letterUp: '@',
    letterDown: '2',
    code: 'Digit2',
    width: '45px'
  },
  {
    letterUp: '#',
    letterDown: '3',
    code: 'Digit3',
    width: '45px'
  },
  {
    letterUp: '$',
    letterDown: '4',
    code: 'Digit4',
    width: '45px'
  },
  {
  letterUp: '$',
  letterDown: '5',
  code: 'Digit5',
  width: '45px'
},
{
  letterUp: '^',
  letterDown: '6',
  code: 'Digit6',
  width: '45px'
},
{
  letterUp: '&',
  letterDown: '7',
  code: 'Digit7',
  width: '45px'
},
{
  letterUp: '*',
  letterDown: '8',
  code: 'Digit8',
  width: '45px'
},
{
  letterUp: '(',
  letterDown: '9',
  code: 'Digit9',
  width: '45px'
},
{
  letterUp: ')',
  letterDown: '0',
  code: 'Digit0',
  width: '45px'
},
{
  letterUp: '_',
  letterDown: '-',
  code: 'Minus',
  width: '45px'
},
{
  letterUp: '+',
  letterDown: '=',
  code: 'Equal',
  width: '45px'
},
{
  letterUp: 'delete',
  letterDown: '',
  code: 'Backspace',
  width: '87px'
},
{
  letterUp: 'tab',
  letterDown: '',
  code: 'Tab',
  width: '87px'
},
{
  letterUp: 'Q',
  letterDown: '',
  code: 'KeyQ',
  width: '45px'
},
{
  letterUp: 'W',
  letterDown: '',
  code: 'KeyW',
  width: '45px'
},
{
  letterUp: 'E',
  letterDown: '',
  code: 'KeyE',
  width: '45px'
},
{
  letterUp: 'R',
  letterDown: '',
  code: 'KeyR',
  width: '45px'
},
{
  letterUp: 'T',
  letterDown: '',
  code: 'KeyT',
  width: '45px'
},
{
  letterUp: 'Y',
  letterDown: '',
  code: 'KeyY',
  width: '45px'
},
{
  letterUp: 'U',
  letterDown: '',
  code: 'KeyU',
  width: '45px'
},
{
  letterUp: 'I',
  letterDown: '',
  code: 'KeyI',
  width: '45px'
},
{
  letterUp: 'O',
  letterDown: '',
  code: 'KeyO',
  width: '45px'
},
{
  letterUp: 'P',
  letterDown: '',
  code: 'KeyP',
  width: '45px'
},
{
  letterUp: '{',
  letterDown: '[',
  code: 'BracketLeft',
  width: '45px'
},
{
  letterUp: '}',
  letterDown: ']',
  code: 'BracketRight',
  width: '45px'
},
{
  letterUp: '|',
  letterDown: '\\',
  code: 'Backslash',
  width: '45px'
},




]

letters.forEach(value => wrapper.append(createButton(value)))




// function mouseupButton(event) {
//   let target = event.target.closest('.button');
//   target.classList.remove('active');
//   textarea.innerHTML = 'h';

// }

function mousedownButton(event) {
  let target = event.target.closest('.button');
  textarea.innerHTML += target.textContent;
}


// wrapper.addEventListener('mouseup', mouseupButton)]
wrapper.addEventListener('mousedown', mousedownButton)


function keydownBtn (event) {
  console.log(event.code)
  let letter = event.code
  document.getElementById(`${letter}`).classList.add('active')
}

function keyupBtn (event) {
  let letter = event.code
  document.getElementById(`${letter}`).classList.remove('active')
}

addEventListener('keydown', keydownBtn)
addEventListener('keyup', keyupBtn)




