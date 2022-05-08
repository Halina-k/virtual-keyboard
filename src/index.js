import "./css/style.css"
import letters from "./object.js"





const wrapper = document.getElementById('wrapper')
const textarea =  document.createElement('textarea');
textarea.disabled = true;
const divDesc = document.createElement('div');
divDesc.className = 'description'
divDesc.innerHTML = 'Клавиатура создана в macOS. Переключение языковой раскладки Alt + Ctrl';
const keyboard = document.createElement('div')
keyboard.classList.add("keyboard")
wrapper.append(textarea);
wrapper.append(divDesc);
wrapper.append(keyboard);


window.addEventListener('load', function() {
	textarea.focus();
});


function setFocus(){
  textarea.focus();
}

let lettersForRu = ["IntlBackslash", "BracketLeft", "BracketRight", "Semicolon", "Quote", "Comma", "Period"]

let language = 'en'

// //////////////////////////////////////////// ФУНКЦИЯ СМЕНЫ ЯЗЫКА
function switchLang() {
  language = language === 'en' ? 'ru' : 'en';
  document.querySelector(".keyboard").innerHTML = ""
  letters.forEach(value => keyboard.append(createButton(value, language)))
}

// //////////////////////////////////////////// СОЗДАНИЕ КНОПОК КЛАВИАТУРЫ
function createButton(configBtn, currentLang) {

  let letterTitles = configBtn[currentLang];

  const div = document.createElement('div');
  div.className = 'button'
  div.style.width = configBtn.width;
  div.id = configBtn.code
  if (div.id.slice(0, 3) === 'Key' || lettersForRu.includes(div.id)) {
    div.classList.add("letter")
  }

  const divForUp = document.createElement('div');
  divForUp.className = 'divForUp'
  divForUp.innerHTML = letterTitles.letterUp;
  div.append(divForUp);

  const divForDown = document.createElement('div');
  divForDown.className = 'divForDown'
  divForDown.innerHTML = letterTitles.letterDown;
  div.append(divForDown);
  return div;
}

letters.forEach(value => keyboard.append(createButton(value, language)))




let currentState = {
  MetaLeft: false,
  MetaRight: false,
  AltLeft: false,
  AltRight: false,
  ControlLeft: false,
  CapsLock: false,
  ShiftLeft: false,
  ShiftRight: false,
}

function upCase() {
  if (currentState.CapsLock === true || currentState.ShiftLeft === true || currentState.ShiftRight === true) {
    document.getElementById('wrapper').classList.add("upper")
  } else {
    document.getElementById('wrapper').classList.remove("upper")
  }
}


// //////////////////////////////////////////// ИМИТИРУЕМ НАЖАТИЕ КНОПКИ ПРИ КЛИКЕ НА ВИРТ КЛАВ

let keyboardValue = {}

function mousedownButton(event) {
  let target = event.target.closest('.button');
  event.preventDefault();

  let key
  if (currentState.ShiftLeft === true || currentState.ShiftRight === true) {
    if(target.id.slice(0, 3) === 'Key' || lettersForRu.includes(target.id)) {
      key = target.querySelector(".divForDown").textContent.toUpperCase()
    } else {
      key = target.querySelector(".divForUp").textContent
    }
  } else if (currentState.CapsLock === true && (target.id.slice(0, 3) === 'Key' || lettersForRu.includes(target.id))) {
    key = target.querySelector(".divForDown").textContent.toUpperCase()
  }  
  else {
    key = target.querySelector(".divForDown").textContent
  }

  keyboardValue = {
    code: target.id,
    key: key,
  }

  if(target.id === "CapsLock" && currentState.CapsLock === true) {
      let keydEventUp = new KeyboardEvent('keyup', keyboardValue)
      window.dispatchEvent(keydEventUp);
  } else {
    let keydEvent = new KeyboardEvent('keydown', keyboardValue)
    window.dispatchEvent(keydEvent);
  }


}

wrapper.addEventListener('mousedown', mousedownButton)




function mouseupButton() {
  if(keyboardValue.code !== 'CapsLock') {
    let keydEventUp = new KeyboardEvent('keyup', keyboardValue)
    window.dispatchEvent(keydEventUp);
  }

}
wrapper.addEventListener('mouseup', mouseupButton)




// //////////////////////////////////////////// ОБРАБОТКА КЛИКА ПО КНОПКЕ, И ВИРТУАЛЬНОГО И РЕАЛЬНОГО
function keydownBtn (event) {
  event.preventDefault();

  console.log(event.code)
  console.log(document.querySelector(`#${event.code} .divForDown`).textContent)
////// Смена языка
  if (event.getModifierState('Alt') && event.getModifierState('Control')) {
    switchLang()
  }

////// Обработка системных кнопок
  if(Object.keys(currentState).includes(event.code)) {
     currentState[event.code] = true
  }

  upCase();

  if (event.code === 'Backspace') {
    textarea.value = textarea.value.slice(0, -1)
  } else if (event.code === "Tab") {
    textarea.value += "\t";
  }  else if (event.code === "Enter") {
    textarea.value += "\n";
  } else if (event.code === "ArrowUp") {
    textarea.value += String.fromCharCode(9650);
  } else if (event.code === "ArrowDown") {
    textarea.value += String.fromCharCode(9660);
  } else if (event.code === "ArrowLeft") {
    textarea.value += String.fromCharCode(9668);
  } else if (event.code === "ArrowRight") {
    textarea.value += String.fromCharCode(9658);
  } else if (event.code.slice(0, 3) === 'Key') {
    let letter = document.querySelector(`#${event.code} .divForDown`).textContent;
    if (currentState.CapsLock === true) {
      textarea.value += letter.toUpperCase();
    } else {
      textarea.value += letter.toLowerCase();
    }
  }
  
//   else if (!(Object.keys(currentState).includes(event.code))) {
//     textarea.value += document.querySelector(`#${event.code} .divForDown`).textContent;
// console.log("HERE")
//   }
//   console.log("and here")


  let letter = event.code
  document.getElementById(`${letter}`).classList.add('active')
}

addEventListener('keydown', keydownBtn)


function keyupBtn(event) {
  event.preventDefault();

  if(Object.keys(currentState).includes(event.code)) {
    currentState[event.code] = false
  }

  upCase();

  document.getElementById(`${event.code}`).classList.remove('active')
}


addEventListener('keyup', keyupBtn)










