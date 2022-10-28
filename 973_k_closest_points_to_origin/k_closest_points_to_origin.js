/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 var kClosest = function(points, k) {
    let closestPoints = [], distances = []
    for(let i = 0; i < points.length; i++) {
        let distance = Math.sqrt(Math.pow(points[i][0], 2) + Math.pow(points[i][1], 2))
        distances.push(distance)
    }
    
    distances = distances.sort((a, b) => a - b)
    
    for(let i = 0; i < points.length; i++) {
        let distance = Math.sqrt(Math.pow(points[i][0], 2) + Math.pow(points[i][1], 2))
        if(distance <= distances[k - 1])
            closestPoints.push([points[i][0], points[i][1]])
        if(closestPoints.length == k)
            break
    }
    
    return closestPoints
};