
var MyQueue = function() {
    this.mainStack = []
    this.supStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.mainStack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while(this.mainStack.length > 1) {
        this.supStack.push(this.mainStack.pop())
    }
    
    let first = this.mainStack.pop()
    while(this.supStack.length > 0) {
        this.mainStack.push(this.supStack.pop())
    }
    return first
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.mainStack[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.mainStack.length == 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */