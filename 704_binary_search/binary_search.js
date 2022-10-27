/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let lowestIndex = 0, highestIndex = nums.length - 1
    
    while(lowestIndex != highestIndex) {
        let middle = Math.floor((highestIndex + lowestIndex) / 2)
        
        if(nums[middle] == target)
            return middle
        
        if(nums[middle] < target) {
            lowestIndex = middle + 1
            if(lowestIndex > nums.length -1) break
        } else {
            highestIndex = middle - 1
            if(highestIndex < 0) break
        }
    }
    
    if(nums[lowestIndex] == target)
        return lowestIndex
    
    return -1
};