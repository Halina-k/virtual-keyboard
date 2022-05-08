import "./css/style.css"
import letters from "./object.js"



const wrapper = document.getElementById('wrapper')
const textarea =  document.createElement('textarea');
textarea.disabled = true;
const divDesc = document.createElement('div');
divDesc.className = 'description'
divDesc.innerHTML = 'Клавиатура создана в macOS. Переключение языковой раскладки Cmd + Space';
wrapper.append(textarea);
wrapper.append(divDesc);


window.addEventListener('load', function() {
	textarea.focus();
});


function setFocus(){
  textarea.focus();
}


function createButton(configBtn, container = null) {
  const div = document.createElement('div');
  div.className = 'button'
  div.style.width = configBtn.width;
  div.id = configBtn.code
  if (div.id.slice(0, 3) === 'Key') {
    div.classList.add("letter")
  }

  const divForUp = document.createElement('div');
  divForUp.className = 'divForUp'
  divForUp.innerHTML = configBtn.letterUp;
  div.append(divForUp);

  const divForDown = document.createElement('div');
  divForDown.className = 'divForDown'
  divForDown.innerHTML = configBtn.letterDown;
  div.append(divForDown);

  return div;
}

letters.forEach(value => wrapper.append(createButton(value)))


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
    if(target.id.slice(0, 3) === 'Key') {
      key = target.querySelector(".divForDown").textContent.toUpperCase()
    } else {
      key = target.querySelector(".divForUp").textContent
    }
  } else if (currentState.CapsLock === true && target.id.slice(0, 3) === 'Key') {
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


  setFocus()
}

wrapper.addEventListener('mousedown', mousedownButton)




function mouseupButton() {
  if(keyboardValue.code !== 'CapsLock') {
    let keydEventUp = new KeyboardEvent('keyup', keyboardValue)
    window.dispatchEvent(keydEventUp);
  }

}
wrapper.addEventListener('mouseup', mouseupButton)





function keydownBtn (event) {

  setFocus()

  if (event.code !== 'CapsLock') {
    event.preventDefault();
  }

  if(Object.keys(currentState).includes(event.code)) {
     currentState[event.code] = true
  }

  console.log( currentState[event.code])
  console.log(currentState)

  // if (currentState.CapsLock === true || currentState.ShiftLeft === true || currentState.ShiftRight === true) {
  //   document.getElementById('wrapper').classList.add("upper")
  // } 

  upCase()



  if (event.code === 'Backspace') {
    textarea.value = textarea.value.slice(0, -1)
  } else if (event.code === "Tab") {
    textarea.value += "\t";
  } else if (event.code.slice(0, 3) === 'Key') {
    if (currentState.CapsLock === true) {
      textarea.value += event.key.toUpperCase();
    } else {
      textarea.value += event.key.toLowerCase();
    }
  } else if (event.code === "Enter") {
    textarea.value += "\n";
  } else if (event.code === "ArrowUp") {
    textarea.value += String.fromCharCode(9650);
  } else if (event.code === "ArrowDown") {
    textarea.value += String.fromCharCode(9660);
  } else if (event.code === "ArrowLeft") {
    textarea.value += String.fromCharCode(9668);
  } else if (event.code === "ArrowRight") {
    textarea.value += String.fromCharCode(9658);
  } else if (!Object.keys(currentState).includes(event.code)) {
    textarea.value += event.key;
  }


  let letter = event.code
  document.getElementById(`${letter}`).classList.add('active')
}

addEventListener('keydown', keydownBtn)







function keyupBtn(event) {
  event.preventDefault();

  if(Object.keys(currentState).includes(event.code)) {
    currentState[event.code] = false
  }

  upCase()
  document.getElementById(`${event.code}`).classList.remove('active')
}


addEventListener('keyup', keyupBtn)










