/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let wealth = 0
    for(let i = 0; i < accounts.length; i++) {
        let sum = accounts[i].reduce((previousValue, currentValue) => previousValue + currentValue)
        if(sum > wealth)
            wealth = sum
    }
    return wealth
};