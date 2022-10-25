/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function(mat, k) {
    let scoreEachRow = []
    for(let i = 0; i < mat.length; i++) {
        let count = 0
        for(let j = 0; j < mat[i].length; j++) {
            if(mat[i][j] == 1)
                count++
        }
        scoreEachRow.push(count * mat.length + i)
    }
    scoreEachRow.sort((a, b) => a - b)
    
    let weakestRows = []
    for(let i = 0; i < k; i++)
        weakestRows.push(scoreEachRow[i] % mat.length)
    
    return weakestRows
};