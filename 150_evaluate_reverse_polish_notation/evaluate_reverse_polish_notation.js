/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
    let stack = []
    
    for(let i = 0; i < tokens.length; i++) {
        switch(tokens[i]) {
            case '+':
                stack.push(stack.pop() + stack.pop())
                break
            case '-':
                let a = stack.pop(), b = stack.pop()
                stack.push(b - a)
                break
            case '*':
                stack.push(stack.pop() * stack.pop())
                break
            case '/':
                let c = stack.pop(), d = stack.pop()
                stack.push(Math.trunc(d / c))
                break
            default:
                stack.push(parseInt(tokens[i]));
                break
        }
    }
    
    return stack.pop()
};