// You can climb a staircase by taking either 1 or 2 steps at a time. If there are n steps in the staircase, how many distinct ways are there to climb to the top step?
// Example
// n = 3
// Ouput: 3
// 1st way: 1 step + 1 step + 1 step
// 2nd way: 1 step + 2 steps
// 3rd way: 2 steps + 1 step

// Brute-Force Solution
// Time complexity: O(2^n)
// this solution will generate all posible combination of 1 and 2 steps and count the number of ways to reach the n step
const climbStairs = (n) => { 
    if (n <= 1) return 1;
    return climbStairs(n - 1) + climbStairs(n - 2);
};

// Dynamic Programming Solution (top-down)
// Time complexity: O(n)

const climbStairsTD = (n, memo = {}) => { 
    if (n in memo) return memo[n];
    if (n <= 1) return 1;

    memo[n] = climbStairsTD(n - 1, memo) + climbStairsTD(n - 2, memo);
    return memo[n];
}

// Dynamic Programming Solution (bottom-up)
// Time complexity: O(n)

const climbStairsBU = (n) => { 
    if (n <= 1) return 1; 
    const dp = new Array(n + 1).fill(0);

    dp[0] = 1; 
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

// console.log(climbStairsBU(6)); // 13

const climbStairsBUotimized = (n) => {
  if (n <= 1) return 1;

  prev2 = 1; // tambien pudiera iniciari con 1 caso 0 peldaños
  prev1 = 1; // tambien pudiera iniciari con 1 caso 1 peldaño

  for (let i = 2; i <= n; i++) { // tambien poder iniciar en 2
    const current = prev1;
    prev1 = prev1 + prev2;
    prev2 = current;
  }

  return prev1;
};

 console.log(climbStairsBUotimized(6)); // 13





