const MORSE_TABLE = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
  ' ': ' ',
};

function decode(expr) {
  let str = expr.split('')
  const arr = [];
  let table = Object.entries(MORSE_TABLE)
  const result = [];
  for (let i = 0; i < expr.length / 10; i++) {
    arr.push(str.splice(0, 10).join('').replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-').replace(/\*\*\*\*\*\*\*\*\*\*/g, ' '))
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < table.length; j++) {
      if (arr[i] === table[j][0]) {
        result.push(table[j][1])
      }
    }
  }
  return result.join('')
}

module.exports = {
    decode
}