/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let triplets = []
    
    nums.sort((a, b) => a - b)
    
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) break
        if(i > 0 && nums[i] == nums[i - 1]) continue
        
        start = i + 1
        end = nums.length - 1
        
        while(start < end) {
            if(nums[i] + nums[start] + nums[end] == 0) {
                triplets.push([nums[i], nums[start], nums[end]])
                while(start < end && nums[start] == nums[start + 1]) start++
                while(start < end && nums[end] == nums[end - 1]) end--
                start++
                end--
            } else if(nums[i] + nums[start] + nums[end] > 0) {
                end--
            } else {
                start++
            }
        }
    }
     return triplets
};