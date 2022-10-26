/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    s = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
    const middle = s.length / 2
    
    for(let i = 0; i < middle; i++) {
        if(s[i] != s[s.length - 1 - i])
            return false
    }
    
    return true
};