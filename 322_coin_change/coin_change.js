/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    coins.sort((a, b) => a - b)
    let dynamicProgramming = [0]
    for(let i = 1; i < amount + 1; i++) {
        dynamicProgramming[i] = amount + 1
    }

    for(let i = 1; i < dynamicProgramming.length; i++) {
        for(const coin of coins) {
            if(i >= coin && dynamicProgramming[i - coin] >= 0) {
                dynamicProgramming[i] = Math.min(dynamicProgramming[i - coin] + 1, dynamicProgramming[i])
            }
        }
        if(dynamicProgramming[i] > amount) dynamicProgramming[i] = -1
    }
    return dynamicProgramming.pop()
};