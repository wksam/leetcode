/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var updateMatrix = function(mat) {
    let queue = []
    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[i].length; j++) {
            if(mat[i][j] != 0)
                mat[i][j] = -1
            else
                queue.push([i, j])
        }
    }
    
    let dist = 0
    while(queue.length > 0) {
        let cell = queue.shift();
        if(mat[cell[0]][cell[1]] == dist) dist++
        
        if(cell[0] - 1 >= 0 && mat[cell[0] - 1][cell[1]] == -1) {
            mat[cell[0] - 1][cell[1]] = dist
            queue.push([cell[0] - 1, cell[1]])
        }
        if(cell[0] + 1 < mat.length && mat[cell[0] + 1][cell[1]] == -1) {
            mat[cell[0] + 1][cell[1]] = dist
            queue.push([cell[0] + 1, cell[1]])
        }
        if(cell[1] - 1 >= 0 && mat[cell[0]][cell[1] - 1] == -1) {
            mat[cell[0]][cell[1] - 1] = dist
            queue.push([cell[0], cell[1] - 1])
        }
        if(cell[1] + 1 < mat[0].length && mat[cell[0]][cell[1] + 1] == -1) {
            mat[cell[0]][cell[1] + 1] = dist
            queue.push([cell[0], cell[1] + 1])
        }
    }
    return mat
};