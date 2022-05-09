function createButton(configBtn, currentLang) {

  let letterTitles = configBtn[currentLang];

  const div = document.createElement('div');
  div.className = 'button'
  div.style.width = configBtn.width;
  div.id = configBtn.code
  if (letterTitles.capslock === true) {
    div.classList.add("capslock")
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

export default createButton