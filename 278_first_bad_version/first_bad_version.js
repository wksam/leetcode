/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let lowVersion = 1
        let highVersion = n
        let firstBadVersion = n
    
        while(lowVersion <= highVersion) {
            let middleVersion = Math.floor((highVersion + lowVersion) / 2)
            
            if(isBadVersion(middleVersion)) {
                firstBadVersion = middleVersion
                highVersion = middleVersion - 1
            } else {
                lowVersion = middleVersion + 1
            }
        }
        
        return firstBadVersion
    };
};