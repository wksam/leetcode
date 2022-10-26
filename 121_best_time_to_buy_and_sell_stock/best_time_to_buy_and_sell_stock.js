/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let lowestPrice = Infinity, maximumProfit = 0
    
    for(let i = 0; i < prices.length; i++) {
        if(lowestPrice > prices[i])
            lowestPrice = prices[i]
        else if(prices[i] - lowestPrice > maximumProfit)
            maximumProfit = prices[i] - lowestPrice
    }
    return maximumProfit
};