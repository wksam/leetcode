/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let stack = []
    for(let i = 0; i < s.length; i++) {
        if(!stack.length) {
            if(s[i] == '(' || s[i] == '{' || s[i] == '[')
                stack.push(s[i])
            else
                return false
        } else {
            if(s[i] == '(' || s[i] == '{' || s[i] == '[')
                stack.push(s[i])
            else {
                const lastOpenBracket = stack.pop()
                switch(lastOpenBracket) {
                    case '(':
                        if(s[i] != ')') return false
                        break
                    case '{':
                        if(s[i] != '}') return false
                        break
                    case '[':
                        if(s[i] != ']') return false
                        break
                }
            }
        }
    }
    
    if(stack.length)
        return false
    
    return true
};