const KeyboardState = {
  language: 'en',

  currentState: {
    MetaLeft: false,
    MetaRight: false,
    AltLeft: false,
    AltRight: false,
    ControlLeft: false,
    CapsLock: false,
    ShiftLeft: false,
    ShiftRight: false,
  },

  initCurrentLanguage() {
    this.language = localStorage.getItem('language') || 'en'
  },

  switchLanguage() {
    this.language = this.language === 'en' ? 'ru' : 'en';
    localStorage.setItem('language', this.language)
  },

  isShiftEnabled() {
    return this.currentState.ShiftLeft === true || this.currentState.ShiftRight === true
  },

  isCapsEnabled() {
    return this.currentState.CapsLock === true
  }
};


export default KeyboardState;