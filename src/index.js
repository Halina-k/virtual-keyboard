import "./css/style.css"
import letters from "./object.js"



const wrapper = document.getElementById('wrapper')
const textarea =  document.createElement('textarea');
const divDesc = document.createElement('div');
divDesc.className = 'description'
divDesc.innerHTML = 'Клавиатура создана в macOS. Переключение языковой раскладки Cmd + Space';
wrapper.append(textarea);
wrapper.append(divDesc);


window.addEventListener('load', function() {
	textarea.focus();
});


function setFocus(){
  console.log('wwww')
  textarea.focus();
}


function createButton(configBtn, container = null) {
  const div = document.createElement('div');
  div.className = 'button'
  div.style.width = configBtn.width;
  div.id = configBtn.code

  const divForUp = document.createElement('div');
  divForUp.innerHTML = configBtn.letterUp;
  div.append(divForUp);

  const divForDown = document.createElement('div');
  divForDown.innerHTML = configBtn.letterDown;
  div.append(divForDown);

  return div;
}

letters.forEach(value => wrapper.append(createButton(value)))


let currentState = {
 Shift: false,
 Control: false,
 Alt: false,
 Meta: false,
 CapsLock: false,
}

// //////////////////////////////////////////// ИМИТИРУЕМ НАЖАТИЕ КНОПКИ ПРИ КЛИКЕ НА ВИРТ КЛАВ
function mousedownButton(event) {
  console.log("mousedownButton")
  let target = event.target.closest('.button');
  event.preventDefault();

  target.classList.add('active')

  let keyboardValue = {
    code: target.id,
    key: target.id.slice(-1).toLowerCase(),
  }

  let keydEvent = new KeyboardEvent('keydown', keyboardValue)
  window.dispatchEvent(keydEvent);

  setFocus()
}

wrapper.addEventListener('mousedown', mousedownButton)




function mouseupButton(event) {
  let target = event.target.closest('.button');
  target.classList.remove('active')
}

wrapper.addEventListener('mouseup', mouseupButton)




function keydownBtn (event) {

  
  event.preventDefault();
  setFocus()
  textarea.value += event.key;
  console.log(event.key)
  let letter = event.code
  document.getElementById(`${letter}`).classList.add('active')
}

addEventListener('keydown', keydownBtn)




function keyupBtn (event) {
  let letter = event.code
  document.getElementById(`${letter}`).classList.remove('active')
}


addEventListener('keyup', keyupBtn)







