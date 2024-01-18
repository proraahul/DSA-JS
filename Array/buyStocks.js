function maximumProfit(prices, n){
    //your code here
    let maxprofit = 0;
    
    for(let i = 1; i<n; i++){
    if(prices[i] > prices[i-1]){
        maxprofit += (prices[i] - prices[i-1]);
    }
}
return maxprofit;
};

n = 7;
prices = [1,2,3,4,5,6,7];

let result = maximumProfit(prices, n);
console.log(result);