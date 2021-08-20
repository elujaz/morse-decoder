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
};

function decode(expr) {
  let encodedWordS = expr.split('**********');

  return decodeWordS(encodedWordS).join(' ');
}

function decodeWordS(wordS) {
  for (let i = 0; i < wordS.length; i++) {
    wordS[i] = decodeWord(wordS[i]);
  }

  return wordS;
}

function decodeWord(encodedWord) {
  let decodedWord = '';
  let encodedSymbolS = encodedWord.match(/.{1,10}/g);

  for (let i = 0; i < encodedSymbolS.length; i++) {
    decodedWord += decodeSymbol(encodedSymbolS[i]);
  }

  return decodedWord;
}

function decodeSymbol(encodedSymbol) {
  let encodedMorseSymbol = encodedSymbol.match(/.{1,2}/g);
  let morseSymbol = '';

  for (let i = 0; i < encodedMorseSymbol.length; i++) {
    switch (encodedMorseSymbol[i]) {
      case '11':
        morseSymbol += '-';
        break;
      case '10':
        morseSymbol += '.';
        break;
    }
  }

  return MORSE_TABLE[morseSymbol];
}

module.exports = {
    decode
}