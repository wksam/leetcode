/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let saveString = []
    let maxLength = 0
    for(let i = 0; i < s.length; i++) {
        if(!saveString.includes(s[i]))
            saveString.push(s[i])
        else {
            let deleteCount = saveString.indexOf(s[i]) + 1
            saveString.splice(0, deleteCount)
            saveString.push(s[i])
        }
        maxLength = Math.max(saveString.length, maxLength)
    }
    return maxLength
};