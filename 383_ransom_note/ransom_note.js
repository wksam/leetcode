/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    let old = magazine;
    for(let i = 0; i < ransomNote.length; i++) {
        magazine = magazine.replace(ransomNote[i], '')
        if(magazine == old)
            return false
        old = magazine
    }
    return true;
};