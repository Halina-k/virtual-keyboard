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
    letterUp: '%',
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
    letterUp: '',
    letterDown: 'backspace',
    code: 'Backspace',
    width: '87px'
  },
  {
    letterUp: '',
    letterDown: 'tab',
    code: 'Tab',
    width: '87px'
  },
  {
    letterUp: '',
    letterDown: 'q',
    code: 'KeyQ',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: 'w',
    code: 'KeyW',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: 'e',
    code: 'KeyE',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: 'r',
    code: 'KeyR',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: 't',
    code: 'KeyT',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: 'y',
    code: 'KeyY',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: 'u',
    code: 'KeyU',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: 'i',
    code: 'KeyI',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: 'o',
    code: 'KeyO',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: 'p',
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
  {
    letterUp: '',
    letterDown: 'caps lock',
    code: 'CapsLock',
    width: '92px'
  },
  {
    letterUp: '',
    letterDown: 'a',
    code: 'KeyA',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: 's',
    code: 'KeyS',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: 'd',
    code: 'KeyD',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: 'f',
    code: 'KeyF',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: 'g',
    code: 'KeyG',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: 'h',
    code: 'KeyH',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: 'j',
    code: 'KeyJ',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: 'k',
    code: 'KeyK',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: 'l',
    code: 'KeyL',
    width: '45px'
  },
  {
    letterUp: ':',
    letterDown: ';',
    code: 'Semicolon',
    width: '45px'
  },
  {
    letterUp: '"',
    letterDown: "'",
    code: 'Quote',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: 'enter',
    code: 'Enter',
    width: '91px'
  },
  {
    letterUp: '',
    letterDown: 'shift',
    code: 'ShiftLeft',
    width: '190px'
  },
  {
    letterUp: '',
    letterDown: 'z',
    code: 'KeyZ',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: 'x',
    code: 'KeyX',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: 'c',
    code: 'KeyC',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: 'v',
    code: 'KeyV',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: 'b',
    code: 'KeyB',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: 'n',
    code: 'KeyN',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: 'm',
    code: 'KeyM',
    width: '45px'
  },
  {
    letterUp: '<',
    letterDown: ',',
    code: 'Comma',
    width: '45px'
  },
  {
    letterUp: '>',
    letterDown: '.',
    code: 'Period',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: '&#9650',
    code: 'ArrowUp',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: 'shift',
    code: 'ShiftRight',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: 'ctrl',
    code: 'ControlLeft',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: 'alt',
    code: 'AltLeft',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: 'cmd',
    code: 'MetaLeft',
    width: '65px'
  },
  {
    letterUp: '',
    letterDown: ' ',
    code: 'Space',
    width: '304px'
  },
  {
    letterUp: '',
    letterDown: 'cmd',
    code: 'MetaRight',
    width: '65px'
  },
  {
    letterUp: '',
    letterDown: 'alt',
    code: 'AltRight',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: '&#9668',
    code: 'ArrowLeft',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: '&#9660',
    code: 'ArrowDown',
    width: '45px'
  },
  {
    letterUp: '',
    letterDown: '&#9658',
    code: 'ArrowRight',
    width: '45px'
  },
];

export default letters




