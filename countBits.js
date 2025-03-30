/* 
Given an integer n, return an array "ans" of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in 
the binary representation of i.
Example 1:

Input: n = 2
Output: [0, 1, 1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
Example 2:

Input: n = 5
Output: [0, 1, 1, 2, 1, 2]
Explanation:

0 --> 0  
1 --> 1 
2 --> 10 2/2 = 1 and residue 0 = 0 and 1/2 = 0 residue 1;
3 --> 11 2/3 = 1 and residue 0 = 11;
4 --> 100 4/2 = 2 and residue 0 and 2/2 = 1 0 and 1/2 = 0 residue 1;
5 --> 101 5/2 = 2 and residue 1 and 2/2 = 1 0 and 1/2 = 0 residue 1;
6 --> 110 6/2 = 3 and residue 0 and 3/2 = 1 1 and 1/2 = 0 residue 1;
7 --> 111 7/2 = 3 and residue 1 and 3/2 = 1 1 and 1/2 = 0 residue 1;
8 --> 1000 8/2 = 4 and residue 0 and 4/2 = 2 0 and 2/2 = 1 0 and 1/2 = 0 residue 1;
9 --> 1001 9/2 = 4 and residue 1 and 4/2 = 2 0 and 2/2 = 1 0 and 1/2 = 0 residue 1;
10 --> 1010 10/2 = 5 and residue 0 and 5/2 = 2 1 and 2/2 = 1 0 and 1/2 = 0 residue 1;
Constraints:
0 <= n <= 105
*/

// b(n) = b(n/2) + n % 2 
// b(2) = b(2/2) + 2 % 2 = 10 lp = 1; rp = 0
// b(3) = b(3/2) + 3 % 2 = 11 lp = 1; rp = 1
// b(4) = b(4/2) + 4 % 2 = 100 lp = 10; rp = 0
// b(5) = b(5/2) + 5 % 2 = 101
// b(6) = b(6/2) + 6 % 2 = 110

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    const ans = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        ans[i] = ans[Math.floor(i / 2)] + i % 2;
    }

    return ans;
};

console.log(countBits(5));