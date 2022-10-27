/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length != t.length) return false
    
    let frequencyS, frequencyT
    frequencyS = [...s].reduce(countFrequency, {})
    frequencyT = [...t].reduce(countFrequency, {})
    
    for(const prop in frequencyS)
        if(frequencyS[prop] != frequencyT[prop])
            return false
    
    return true
};

var countFrequency = function(previousValue, currentValue) {
    previousValue[currentValue] = previousValue[currentValue] + 1 || 1
    return previousValue
}