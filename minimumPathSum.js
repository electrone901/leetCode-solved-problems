/*
minimumPathSum
64. Minimum Path Sum

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]

dp =  [1 4  5]
      [2 0  0]
      [6 0  0]

pseudo code:
 - 
*/

function smart(matrix) {
    if (!matrix) return 0;
    // get the length of row, col
    let [r, c] = [matrix.length, matrix[0].length];

    // making a multidimensional array 
    let dp = [
        [matrix[0][0]]
    ];

    // loop row
    for (let i = 1; i < r; i++) {
        dp[i] = [];
        dp[i][0] = dp[i - 1][0] + matrix[i][0];
    }
    // loop col
    for (let i = 1; i < c; i++) {
        dp[0][i] = dp[0][i - 1] + matrix[0][i];
    }

    //calculate min and insert 
    for (let i = 1; i < r; i++) {
        for (let j = 1; j < c; j++) {
            // inserts but first get the min then add it
            dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    // return the min sum  
    return dp[r - 1][c - 1];
}

console.log(smart([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]));