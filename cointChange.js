/* You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
You may assume that you have an infinite number of each kind of coin.

Example 1:
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
 
Constraints:
1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104 */

var coinChange = function(coins, amount) {
    
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange([1,2,5], 11)); // 3
console.log(coinChange([2], 3)); // -1
console.log(coinChange([1], 0)); // 0
console.log(coinChange([1], 1)); // 1
console.log(coinChange([1], 2)); // 2

const coinChangeBruteForce = (coins, amount) => { 
    let min = Infinity;
    const helper = (index, currentAmount, count) => {
        if (currentAmount === amount) {
            min = Math.min(min, count);
            return;
        }
        if (currentAmount > amount) return;
        for (let i = index; i < coins.length; i++) {
            helper(i, currentAmount + coins[i], count + 1);
        }
    }
    helper(0, 0, 0);
    return min === Infinity ? -1 : min;
}
