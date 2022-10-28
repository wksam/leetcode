/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
    let intervalAfterInsertion = []
    let i = 0
    
    while(i < intervals.length && newInterval[0] > intervals[i][1]) {
        intervalAfterInsertion.push(intervals[i])
        i++
    }
    
    while(i < intervals.length && newInterval[1] >= intervals[i][0]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0])
        newInterval[1] = Math.max(newInterval[1], intervals[i][1])
        i++
    }
    intervalAfterInsertion.push(newInterval)
    
    while(i < intervals.length) {
        intervalAfterInsertion.push(intervals[i])
        i++
    }
    
    return intervalAfterInsertion
};