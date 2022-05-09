const letters = [
  {
    en: {
      letterUp: '~',
      letterDown: '`',
      capslock: false,
    },
    ru: {
      letterUp: 'Ё',
      letterDown: 'ё',
      capslock: true,
    },
    code: 'IntlBackslash',
    width: '45px',
  },
  {
    en: {
      letterUp: '!',
      letterDown: '1',
      capslock: false,
    },
    ru: {
      letterUp: '!',
      letterDown: '1',
      capslock: false,
    },
    code: 'Digit1',
    width: '45px',
  },
  {
    en: {
      letterUp: '@',
      letterDown: '2',
      capslock: false,
    },
    ru: {
      letterUp: '@',
      letterDown: '2',
      capslock: false,
    },
    code: 'Digit2',
    width: '45px',
  },
  {
    en: {
      letterUp: '#',
      letterDown: '3',
      capslock: false,
    },
    ru: {
      letterUp: '#',
      letterDown: '3',
      capslock: false,
    },
    code: 'Digit3',
    width: '45px',
  },

  {
    en: {
      letterUp: '$',
      letterDown: '4',
      capslock: false,
    },
    ru: {
      letterUp: '$',
      letterDown: '4',
      capslock: false,
    },
    code: 'Digit4',
    width: '45px',
  },
  {
    en: {
      letterUp: '%',
      letterDown: '5',
      capslock: false,
    },
    ru: {
      letterUp: '%',
      letterDown: '5',
      capslock: false,
    },
    code: 'Digit5',
    width: '45px',
  },
  {
    en: {
      letterUp: '^',
      letterDown: '6',
      capslock: false,
    },
    ru: {
      letterUp: '^',
      letterDown: '6',
      capslock: false,
    },
    code: 'Digit6',
    width: '45px',
  },
  {
    en: {
      letterUp: '&',
      letterDown: '7',
      capslock: false,
    },
    ru: {
      letterUp: '&',
      letterDown: '7',
      capslock: false,
    },
    code: 'Digit7',
    width: '45px',
  },
  {
    en: {
      letterUp: '*',
      letterDown: '8',
      capslock: false,
    },
    ru: {
      letterUp: '*',
      letterDown: '8',
      capslock: false,
    },
    code: 'Digit8',
    width: '45px',
  },
  {
    en: {
      letterUp: '(',
      letterDown: '9',
      capslock: false,
    },
    ru: {
      letterUp: '(',
      letterDown: '9',
      capslock: false,
    },
    code: 'Digit9',
    width: '45px',
  },
  {
    en: {
      letterUp: ')',
      letterDown: '0',
      capslock: false,
    },
    ru: {
      letterUp: ')',
      letterDown: '0',
      capslock: false,
    },
    code: 'Digit0',
    width: '45px',
  },
  {
    en: {
      letterUp: '_',
      letterDown: '-',
      capslock: false,
    },
    ru: {
      letterUp: '_',
      letterDown: '-',
      capslock: false,
    },
    code: 'Minus',
    width: '45px',
  },
  {
    en: {
      letterUp: '+',
      letterDown: '=',
      capslock: false,
    },
    ru: {
      letterUp: '+',
      letterDown: '=',
      capslock: false,
    },
    code: 'Equal',
    width: '45px',
  },
  {
    en: {
      letterUp: 'backspace',
      letterDown: 'backspace',
      capslock: false,
    },
    ru: {
      letterUp: 'backspace',
      letterDown: 'backspace',
      capslock: false,
    },
    code: 'Backspace',
    width: '87px',
  },
  {
    en: {
      letterUp: 'tab',
      letterDown: 'tab',
      capslock: false,
    },
    ru: {
      letterUp: 'tab',
      letterDown: 'tab',
      capslock: false,
    },
    code: 'Tab',
    width: '87px',
  },
  {
    en: {
      letterUp: 'Q',
      letterDown: 'q',
      capslock: true,
    },
    ru: {
      letterUp: 'Й',
      letterDown: 'й',
      capslock: true,
    },
    code: 'KeyQ',
    width: '45px',
  },
  {
    en: {
      letterUp: 'W',
      letterDown: 'w',
      capslock: true,
    },
    ru: {
      letterUp: 'Ц',
      letterDown: 'ц',
      capslock: true,
    },
    code: 'KeyW',
    width: '45px',
  },
  {
    en: {
      letterUp: 'E',
      letterDown: 'e',
      capslock: true,
    },
    ru: {
      letterUp: 'У',
      letterDown: 'у',
      capslock: true,
    },
    code: 'KeyE',
    width: '45px',
  },
  {
    en: {
      letterUp: 'R',
      letterDown: 'r',
      capslock: true,
    },
    ru: {
      letterUp: 'К',
      letterDown: 'к',
      capslock: true,
    },
    code: 'KeyR',
    width: '45px',
  },
  {
    en: {
      letterUp: 'T',
      letterDown: 't',
      capslock: true,
    },
    ru: {
      letterUp: 'Е',
      letterDown: 'е',
      capslock: true,
    },
    code: 'KeyT',
    width: '45px',
  },
  {
    en: {
      letterUp: 'Y',
      letterDown: 'y',
      capslock: true,
    },
    ru: {
      letterUp: 'Н',
      letterDown: 'н',
      capslock: true,
    },
    code: 'KeyY',
    width: '45px',
  },
  {
    en: {
      letterUp: 'U',
      letterDown: 'u',
      capslock: true,
    },
    ru: {
      letterUp: 'Г',
      letterDown: 'г',
      capslock: true,
    },
    code: 'KeyU',
    width: '45px',
  },
  {
    en: {
      letterUp: 'I',
      letterDown: 'i',
      capslock: true,
    },
    ru: {
      letterUp: 'Ш',
      letterDown: 'ш',
      capslock: true,
    },
    code: 'KeyI',
    width: '45px',
  },
  {
    en: {
      letterUp: 'O',
      letterDown: 'o',
      capslock: true,
    },
    ru: {
      letterUp: 'Щ',
      letterDown: 'щ',
      capslock: true,
    },
    code: 'KeyO',
    width: '45px',
  },
  {
    en: {
      letterUp: 'P',
      letterDown: 'p',
      capslock: true,
    },
    ru: {
      letterUp: 'З',
      letterDown: 'з',
      capslock: true,
    },
    code: 'KeyP',
    width: '45px',
  },
  {
    en: {
      letterUp: '{',
      letterDown: '[',
      capslock: false,
    },
    ru: {
      letterUp: 'Х',
      letterDown: 'х',
      capslock: true,
    },
    code: 'BracketLeft',
    width: '45px',
  },
  {
    en: {
      letterUp: '}',
      letterDown: ']',
      capslock: false,
    },
    ru: {
      letterUp: 'Ъ',
      letterDown: 'ъ',
      capslock: true,
    },
    code: 'BracketRight',
    width: '45px',
  },
  {
    en: {
      letterUp: '|',
      letterDown: '\\',
      capslock: false,
    },
    ru: {
      letterUp: '/',
      letterDown: '\\',
      capslock: false,
    },
    code: 'Backslash',
    width: '45px',
  },
  {
    en: {
      letterUp: 'caps lock',
      letterDown: 'caps lock',
      capslock: false,
    },
    ru: {
      letterUp: 'caps lock',
      letterDown: 'caps lock',
      capslock: false,
    },
    code: 'CapsLock',
    width: '92px',
  },
  {
    en: {
      letterUp: 'A',
      letterDown: 'a',
      capslock: true,
    },
    ru: {
      letterUp: 'Ф',
      letterDown: 'ф',
      capslock: true,
    },
    code: 'KeyA',
    width: '45px',
  },
  {
    en: {
      letterUp: 'S',
      letterDown: 's',
      capslock: true,
    },
    ru: {
      letterUp: 'Ы',
      letterDown: 'ы',
      capslock: true,
    },
    code: 'KeyS',
    width: '45px',
  },
  {
    en: {
      letterUp: 'D',
      letterDown: 'd',
      capslock: true,
    },
    ru: {
      letterUp: 'В',
      letterDown: 'в',
      capslock: true,
    },
    code: 'KeyD',
    width: '45px',
  },
  {
    en: {
      letterUp: 'F',
      letterDown: 'f',
      capslock: true,
    },
    ru: {
      letterUp: 'А',
      letterDown: 'а',
      capslock: true,
    },
    code: 'KeyF',
    width: '45px',
  },
  {
    en: {
      letterUp: 'G',
      letterDown: 'g',
      capslock: true,
    },
    ru: {
      letterUp: 'П',
      letterDown: 'п',
      capslock: true,
    },
    code: 'KeyG',
    width: '45px',
  },
  {
    en: {
      letterUp: 'H',
      letterDown: 'h',
      capslock: true,
    },
    ru: {
      letterUp: 'Р',
      letterDown: 'р',
      capslock: true,
    },
    code: 'KeyH',
    width: '45px',
  },
  {
    en: {
      letterUp: 'J',
      letterDown: 'j',
      capslock: true,
    },
    ru: {
      letterUp: 'О',
      letterDown: 'о',
      capslock: true,
    },
    code: 'KeyJ',
    width: '45px',
  },
  {
    en: {
      letterUp: 'K',
      letterDown: 'k',
      capslock: true,
    },
    ru: {
      letterUp: 'Л',
      letterDown: 'л',
      capslock: true,
    },
    code: 'KeyK',
    width: '45px',
  },
  {
    en: {
      letterUp: 'L',
      letterDown: 'l',
      capslock: true,
    },
    ru: {
      letterUp: 'Д',
      letterDown: 'д',
      capslock: true,
    },
    code: 'KeyL',
    width: '45px',
  },
  {
    en: {
      letterUp: ':',
      letterDown: ';',
      capslock: false,
    },
    ru: {
      letterUp: 'Ж',
      letterDown: 'ж',
      capslock: true,
    },
    code: 'Semicolon',
    width: '45px',
  },
  {
    en: {
      letterUp: '"',
      letterDown: "'",
      capslock: false,
    },
    ru: {
      letterUp: 'Э',
      letterDown: 'э',
      capslock: true,
    },
    code: 'Quote',
    width: '45px',
  },
  {
    en: {
      letterUp: 'enter',
      letterDown: 'enter',
      capslock: false,
    },
    ru: {
      letterUp: 'enter',
      letterDown: 'enter',
      capslock: false,
    },
    code: 'Enter',
    width: '91px',
  },
  {
    en: {
      letterUp: 'shift',
      letterDown: 'shift',
      capslock: false,
    },
    ru: {
      letterUp: 'shift',
      letterDown: 'shift',
      capslock: false,
    },
    code: 'ShiftLeft',
    width: '143px',
  },
  {
    en: {
      letterUp: 'Z',
      letterDown: 'z',
      capslock: true,
    },
    ru: {
      letterUp: 'Я',
      letterDown: 'я',
      capslock: true,
    },
    code: 'KeyZ',
    width: '45px',
  },
  {
    en: {
      letterUp: 'X',
      letterDown: 'x',
      capslock: true,
    },
    ru: {
      letterUp: 'Ч',
      letterDown: 'ч',
      capslock: true,
    },
    code: 'KeyX',
    width: '45px',
  },
  {
    en: {
      letterUp: 'C',
      letterDown: 'c',
      capslock: true,
    },
    ru: {
      letterUp: 'С',
      letterDown: 'с',
      capslock: true,
    },
    code: 'KeyC',
    width: '45px',
  },
  {
    en: {
      letterUp: 'V',
      letterDown: 'v',
      capslock: true,
    },
    ru: {
      letterUp: 'М',
      letterDown: 'м',
      capslock: true,
    },
    code: 'KeyV',
    width: '45px',
  },
  {
    en: {
      letterUp: 'B',
      letterDown: 'b',
      capslock: true,
    },
    ru: {
      letterUp: 'И',
      letterDown: 'и',
      capslock: true,
    },
    code: 'KeyB',
    width: '45px',
  },
  {
    en: {
      letterUp: 'N',
      letterDown: 'n',
      capslock: true,
    },
    ru: {
      letterUp: 'Т',
      letterDown: 'т',
      capslock: true,
    },
    code: 'KeyN',
    width: '45px',
  },
  {
    en: {
      letterUp: 'M',
      letterDown: 'm',
      capslock: true,
    },
    ru: {
      letterUp: 'Ь',
      letterDown: 'ь',
      capslock: true,
    },
    code: 'KeyM',
    width: '45px',
  },
  {
    en: {
      letterUp: '<',
      letterDown: ',',
      capslock: false,
    },
    ru: {
      letterUp: 'Б',
      letterDown: 'б',
      capslock: true,
    },
    code: 'Comma',
    width: '45px',
  },
  {
    en: {
      letterUp: '>',
      letterDown: '.',
      capslock: false,
    },
    ru: {
      letterUp: 'Ю',
      letterDown: 'ю',
      capslock: true,
    },
    code: 'Period',
    width: '45px',
  },
  {
    en: {
      letterUp: '?',
      letterDown: '/',
      capslock: false,
    },
    ru: {
      letterUp: ',',
      letterDown: '.',
      capslock: false,
    },
    code: 'Slash',
    width: '45px',
  },
  {
    en: {
      letterUp: '&#9650',
      letterDown: '&#9650',
      capslock: false,
    },
    ru: {
      letterUp: '&#9650',
      letterDown: '&#9650',
      capslock: false,
    },
    code: 'ArrowUp',
    width: '45px',
  },
  {
    en: {
      letterUp: 'shift',
      letterDown: 'shift',
      capslock: false,
    },
    ru: {
      letterUp: 'shift',
      letterDown: 'shift',
      capslock: false,
    },
    code: 'ShiftRight',
    width: '45px',
  },
  {
    en: {
      letterUp: 'ctrl',
      letterDown: 'ctrl',
      capslock: false,
    },
    ru: {
      letterUp: 'ctrl',
      letterDown: 'ctrl',
      capslock: false,
    },
    code: 'ControlLeft',
    width: '45px',
  },
  {
    en: {
      letterUp: 'alt',
      letterDown: 'alt',
      capslock: false,
    },
    ru: {
      letterUp: 'alt',
      letterDown: 'alt',
      capslock: false,
    },
    code: 'AltLeft',
    width: '45px',
  },
  {
    en: {
      letterUp: 'cmd',
      letterDown: 'cmd',
      capslock: false,
    },
    ru: {
      letterUp: 'cmd',
      letterDown: 'cmd',
      capslock: false,
    },
    code: 'MetaLeft',
    width: '65px',
  },
  {
    en: {
      letterUp: ' ',
      letterDown: ' ',
      capslock: false,
    },
    ru: {
      letterUp: ' ',
      letterDown: ' ',
      capslock: false,
    },
    code: 'Space',
    width: '304px',
  },
  {
    en: {
      letterUp: 'cmd',
      letterDown: 'cmd',
      capslock: false,
    },
    ru: {
      letterUp: 'cmd',
      letterDown: 'cmd',
      capslock: false,
    },
    code: 'MetaRight',
    width: '65px',
  },
  {
    en: {
      letterUp: 'alt',
      letterDown: 'alt',
      capslock: false,
    },
    ru: {
      letterUp: 'alt',
      letterDown: 'alt',
      capslock: false,
    },
    code: 'AltRight',
    width: '45px',
  },
  {
    en: {
      letterUp: '&#9668',
      letterDown: '&#9668',
      capslock: false,
    },
    ru: {
      letterUp: '&#9668',
      letterDown: '&#9668',
      capslock: false,
    },
    code: 'ArrowLeft',
    width: '45px',
  },
  {
    en: {
      letterUp: '&#9660',
      letterDown: '&#9660',
      capslock: false,
    },
    ru: {
      letterUp: '&#9660',
      letterDown: '&#9660',
      capslock: false,
    },
    code: 'ArrowDown',
    width: '45px',
  },
  {
    en: {
      letterUp: '&#9658',
      letterDown: '&#9658',
      capslock: false,
    },
    ru: {
      letterUp: '&#9658',
      letterDown: '&#9658',
      capslock: false,
    },
    code: 'ArrowRight',
    width: '45px',
  },
];

export default letters
