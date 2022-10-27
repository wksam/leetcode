/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, color) {
    if(image[sr][sc] == color) return image
    
    let path = image[sr][sc]
    image[sr][sc] = color
    
    if(sr - 1 >= 0 && image[sr - 1][sc] == path)
        floodFill(image, sr - 1, sc, color)
    if(sr + 1 < image.length && image[sr + 1][sc] == path)
        floodFill(image, sr + 1, sc, color)
    if(sc - 1 >= 0 && image[sr][sc - 1] == path)
        floodFill(image, sr, sc - 1, color)
    if(sc + 1 < image[sr].length && image[sr][sc + 1] == path)
        floodFill(image, sr, sc + 1, color)
    
    return image
};