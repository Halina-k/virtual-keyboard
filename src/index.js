import './css/style.css'

import letters from './lettersVocabulary'
import KeyboardState from './KeyboardState';
import createButton from './CreateButton';

const wrapper = document.createElement('div');
wrapper.id = 'wrapper';

const textarea = document.createElement('textarea');

const divDesc = document.createElement('div');
divDesc.className = 'description'
divDesc.innerHTML = 'Клавиатура создана в MacOS с US-раскладкой клавиатуры. Переключение языка: Alt + Ctrl';

const keyboard = document.createElement('div')
keyboard.classList.add('keyboard')

wrapper.append(textarea);
wrapper.append(divDesc);
wrapper.append(keyboard);

document.body.append(wrapper);

window.addEventListener('load', () => {
  KeyboardState.initCurrentLanguage()

  letters.forEach((value) => keyboard.append(createButton(value, KeyboardState.language)))

  textarea.focus();
})

// //////////////////////////////////////////// ФУНКЦИЯ СМЕНЫ ЯЗЫКА
function switchLang() {
  KeyboardState.switchLanguage();

  document.querySelector('.keyboard').innerHTML = ''
  letters.forEach((value) => keyboard.append(createButton(value, KeyboardState.language)))

  textarea.focus();
}

// //////////////////////////////////////////// СМЕНА РАСКЛАДКИ ПРИ shift и capc
function upCase() {
  if (KeyboardState.isCapsEnabled()) {
    document.getElementById('wrapper').classList.add('caps')
  } else {
    document.getElementById('wrapper').classList.remove('caps')
  }

  if (KeyboardState.isShiftEnabled()) {
    document.getElementById('wrapper').classList.add('upper')
  } else {
    document.getElementById('wrapper').classList.remove('upper')
  }
}

// //////////////////////////////////////////// ИМИТИРУЕМ НАЖАТИЕ КНОПКИ ПРИ КЛИКЕ НА ВИРТ КЛАВ

let keyboardValue = {}

function mousedownButton(event) {
  const target = event.target.closest('.button');

  if (!target) {
    return false;
  }

  event.preventDefault();

  keyboardValue = {
    code: target.id,
  }
  /* особенности зажатия и отжатия капса */
  let keydEvent;
  if (target.id === 'CapsLock' && KeyboardState.isCapsEnabled()) {
    keydEvent = new KeyboardEvent('keyup', keyboardValue)
  } else {
    keydEvent = new KeyboardEvent('keydown', keyboardValue)
  }
  window.dispatchEvent(keydEvent);
  return true;
}

wrapper.addEventListener('mousedown', mousedownButton)

function mouseupButton(event) {
  const target = event.target.closest('.button');

  if (!target) {
    return false;
  }

  if (keyboardValue.code !== 'CapsLock') {
    const keydEventUp = new KeyboardEvent('keyup', keyboardValue)
    window.dispatchEvent(keydEventUp);
  }
  return true;
}
wrapper.addEventListener('mouseup', mouseupButton)

// ////////////////////////////// ОБРАБОТКА КЛИКА ПО КНОПКЕ, И ВИРТУАЛЬНОГО И РЕАЛЬНОГО
function keydownBtn(event) {
  event.preventDefault();
  if (!document.getElementById(event.code)) {
    return false
  }
  // // Смена языка
  if (event.getModifierState('Alt') && event.getModifierState('Control')) {
    switchLang()
    return true;
  }

  textarea.focus();

  // // Обработка системных кнопок
  if (Object.keys(KeyboardState.currentState).includes(event.code)) {
    KeyboardState.currentState[event.code] = true
    upCase();
  } else if (event.code === 'Backspace') {
    textarea.value = textarea.value.slice(0, -1)
  } else if (event.code === 'Tab') {
    textarea.value += '\t';
  } else if (event.code === 'Enter') {
    textarea.value += '\n';
  } else if (event.code === 'ArrowUp') {
    textarea.value += String.fromCharCode(9650);
  } else if (event.code === 'ArrowDown') {
    textarea.value += String.fromCharCode(9660);
  } else if (event.code === 'ArrowLeft') {
    textarea.value += String.fromCharCode(9668);
  } else if (event.code === 'ArrowRight') {
    textarea.value += String.fromCharCode(9658);
  } else if (KeyboardState.isShiftEnabled()) {
    if (document.querySelector('#wrapper').classList.contains('upper')) {
      const letter = document.querySelector(`#${event.code} .divForUp`).textContent;
      textarea.value += letter;
    } else {
      const letter = document.querySelector(`#${event.code} .divForDown`).textContent;
      textarea.value += letter;
    }
  } else if (KeyboardState.isCapsEnabled()) {
    if (document.querySelector(`#${event.code}`).classList.contains('capslock')) {
      const letter = document.querySelector(`#${event.code} .divForUp`).textContent;
      textarea.value += letter;
    } else {
      const letter = document.querySelector(`#${event.code} .divForDown`).textContent;
      textarea.value += letter;
    }
  } else {
    const letter = document.querySelector(`#${event.code} .divForDown`).textContent;
    textarea.value += letter;
  }

  document.getElementById(event.code).classList.add('active')
  return true
}

window.addEventListener('keydown', keydownBtn)

function keyupBtn(event) {
  event.preventDefault();
  if (!document.getElementById(event.code)) {
    return false
  }

  if (Object.keys(KeyboardState.currentState).includes(event.code)) {
    KeyboardState.currentState[event.code] = false
    upCase();
  }

  document.getElementById(event.code).classList.remove('active')
  return true
}

window.addEventListener('keyup', keyupBtn)
