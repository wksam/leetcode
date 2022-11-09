var Trie = function() {
    this.trie = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let trie = this.trie
    for(const char of word) {
        if(!trie[char]) trie[char] = {}
        trie = trie[char]
    }
    trie.isTerminal = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let trie = this.trie
    for(const char of word) {
        if(!trie[char]) return false
        trie = trie[char]
    }
    return !!trie.isTerminal
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let trie = this.trie
    for(const char of prefix) {
        if(!trie[char]) return false
        trie = trie[char]
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */