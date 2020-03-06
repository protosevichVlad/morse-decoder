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


function multiSlice(str, number){
    let array_elemnt_length_number = [];
    while(str.length != 0){
        array_elemnt_length_number.push(str.slice(0, number));
        str = str.slice(number, str.length);
    }
    return array_elemnt_length_number;
}

function decode(expr) {
    let result = "";
    let array_for_decode = multiSlice(expr, 10);
    for(let i = 0; i < array_for_decode.length; i++){
        if(array_for_decode[i] === '**********'){
            result += ' ';
            continue;
        }
        let symble_for_decode = multiSlice(array_for_decode[i], 2);
        let result_symble = '';
        for(let j = 0; j < 5; j++){
            if (symble_for_decode[j] === '10') result_symble += '.';
            if (symble_for_decode[j] === '11') result_symble += '-';
        }
        result += MORSE_TABLE[result_symble];
    }
    return result;
}

module.exports = {
    decode
}
