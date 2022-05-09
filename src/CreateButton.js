export function createButton(configBtn, currentLang) {
  const letterTitles = configBtn[currentLang];

  const div = document.createElement('div');
  div.className = 'button'
  div.style.width = configBtn.width;
  div.id = configBtn.code
  if (letterTitles.capslock === true) {
    div.classList.add('capslock')
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

export function updateButton(configBtn, currentLang) {
  const letterTitles = configBtn[currentLang];

  const button = document.getElementById(configBtn.code);

  button.classList.remove('capslock');

  if (letterTitles.capslock === true) {
    button.classList.add('capslock')
  }

  const divForUp = button.querySelector('.divForUp');
  divForUp.innerHTML = letterTitles.letterUp;

  const divForDown = button.querySelector('.divForDown');
  divForDown.innerHTML = letterTitles.letterDown;
}
