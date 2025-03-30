/* This page breaks down how to solve a question with dynamic programming into a series of steps which ultimately leads to the "bottom-up" solution to the problem.
1. Find the Recurrence Relation
2. Identify the Base Case(s)
3. Write the Recursive Solution
4. Add Memoization
5. Convert to "Bottom-Up" DP
6. Further Optimization

DESCRIPTION (credit Leetcode.com)
You're a treasure hunter in a neighborhood where houses are arranged in a row, and each house contains a different amount of treasure. 
Your goal is to collect as much treasure as possible, but there's a catch: if you collect treasure from two adjacent houses,
 it triggers a neighborhood-wide alert, ending your hunt immediately.
Given an array treasure of non-negative integers, where each integer represents the amount of treasure in a house, write a function 
to return the maximum amount of treasure you can collect without triggering any alarms.

    Example 1:
    Input: treasure = : [3, 1, 4, 1, 5]
    Best Haul: 12
    Explanation: Collect from houses 0, 2, and 4 for a total of 3 + 4 + 5 = 12. */

// const treasureHunter = (treasure) => { 
//     // Step 1: Find the Recurrence Relation
//     // The recurrence relation is the formula that describes how to solve the problem using smaller subproblems.
//     // Let's define a function dp(i) that returns the maximum amount of treasure we can collect from houses 0 to i.
//     // If we decide to collect treasure from house i, then we cannot collect from house i - 1.
//     // Therefore, the maximum amount of treasure we can collect from houses 0 to i is the maximum of two cases:
//     // 1. Collect from house i and the maximum amount of treasure we can collect from houses 0 to i - 2.
//     // 2. Do not collect from house i and the maximum amount of treasure we can collect from houses 0 to i - 1.
//     // The recurrence relation is:
//     // dp(i) = max(dp(i - 2) + treasure[i], dp(i - 1))
//     // where dp(0) = treasure[0] and dp(1) = max(treasure[0], treasure[1])
    
//     // Step 2: Identify the Base Case(s)
//     // The base cases are the smallest subproblems that can be solved directly.
//     // The base cases are dp(0) = treasure[0] and dp(1) = max(treasure[0], treasure[1]).
    
//     // Step 3: Write the Recursive Solution

//     if (!treasure || treasure.length === 0) return 0;
    
//     const dp = (i) => {
//         if (i === 0) {
//             return 0;
//         }

//         if (i === 1) {
//             return treasure[0];
//         }

//         if (i === 2) {
//             return Math.max(treasure[0], treasure[1]);
//         }

//         const skip = dp(i - 1);
//         const take = dp(i - 2) + treasure[i - 1];

//         return Math.max(skip, take);
//     };

//     return dp(treasure.length);
// };


const treasureHunterTD = (treasure) => { 
    const n = treasure.length;
    if (!n || n === 0) return 0;
    if (n === 1) return treasure[0];

    const dp = (i, map = {}) => {
        if (i === 0) return 0;
        if (i === 1) return treasure[0];
        if (i === 2) return Math.max(treasure[0], treasure[1]);
        if (i in map) return map[i];
      
        const skip = dp(i - 1, map);
        const take = dp(i - 2, map) + treasure[i - 1];

        map[i] = Math.max(skip, take);
        console.log(map);
        return map[i];
    };

    return dp(treasure.length);
}

const treasureHunterBD = (treasure) => {
    const n = treasure.length;
    if (!n || n === 0) return 0;
    if (n === 1) return treasure[0];

    const dp = new Array(n + 1).fill(0); //(dp[0] = 0 already)

    dp[1] = treasure[0];
    dp[2] = Math.max(treasure[0], treasure[1]);

    for (let i = 3; i <= n; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + treasure[i - 1]);
    }

    return dp[n];
};


const treasureHunterBDoptimized = (treasure) => {
    const n = treasure.length;
    if (n === 0) return 0;
    if (n === 1) return treasure[0];

    let prev2 = treasure[0]; // i - 2
    let prev1 = Math.max(treasure[0], treasure[1]); // i - 1

    for (let i = 2; i <= n; i++) {
        const current = Math.max(prev1, prev2 + treasure[i - 1]);
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
};

const treasure = [3, 1, 4, 1, 5];
console.log(treasureHunterBDoptimized(treasure));