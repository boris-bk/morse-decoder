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
    expr = expr.match(/.{1,10}/g);
    let wrap = null;
    let str = ''
    for (let j = 0; j < expr.length; j++) {
        if (expr[j] === '**********') {
            str += ' '
            continue
        }
        wrap = expr[j].match(/.{1,2}/g);
        for (let i = 0; i < wrap.length; i++) {
            if (wrap[i] === '00') delete wrap[i]
            if (wrap[i] === '10') {
                wrap[i] = '.'
            }
            if (wrap[i] === '11') {
                wrap[i] = '-'
            }
        }
        for (let key in MORSE_TABLE) {
            if (key === wrap.join('')) {
                str += MORSE_TABLE[key];
            }
        }
        expr[j] = wrap.join('')
    }
    return str
}

module.exports = {
    decode
}