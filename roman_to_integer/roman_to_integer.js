const symbolsToNumber = (c) => {
    switch (c) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
    }
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanNumber = [...s]
    let number = 0
    for(let i = 0; i < romanNumber.length; i++) {
        if (i + 1 < romanNumber.length) {
            if (symbolsToNumber(romanNumber[i]) < symbolsToNumber(romanNumber[i + 1])) {
                number += symbolsToNumber(romanNumber[i + 1]) - symbolsToNumber(romanNumber[i]);
                i++;
            }
            else
                number += symbolsToNumber(romanNumber[i])
        } else {
            number += symbolsToNumber(romanNumber[i])
        }
    }
    return number;
};