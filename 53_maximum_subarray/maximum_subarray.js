/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let largestSum = nums[0]
    let lastSum = nums[0]
    
    for(let i = 1; i < nums.length; i++) {
        if(lastSum + nums[i] < nums[i])
            lastSum = nums[i]
        else
            lastSum += nums[i]
        
        if(largestSum < lastSum)
            largestSum = lastSum
    }
    
    return largestSum
};