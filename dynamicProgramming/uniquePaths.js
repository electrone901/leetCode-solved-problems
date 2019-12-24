/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


Above is a 7 x 3 grid. How many possible unique paths are there?

Note: m and n will be at most 100.

Example 1:
Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right



Example 2:
Input: m = 7, n = 3
Output: 28


    ALGORITHM:
        - Because you can only go down/ right you can use dp and built a multi dimensional 
          array to find the unique paths you can also do it recusive.
        
        Recursion: 2^n+m
        - The genaral idea is:
            - Loop through the matrix from 0 to n-1 
            - check if i <= 0 || j <= 0  return error
            - else return numPath(i-1) +  numPath(j-1)
            
            Define numPath(i, i):
                if(i == 0 || j ==0) return 1;
                else return numPath(i-1, j) + numPath(i, j-1)
            
            This will return the num of recurrence: opt(i, j) = opt(i - 1, j) + opt(i, j - 1)
*/


// Recursion: 
// Time: O(2^{M + N})
// Space: O(M + N)
var uniquePaths = function(rows, cols) {
    if(rows <= 0 || cols <= 0) return 'BAD INPUT';
    
    return numbPaths(rows-1, cols-1);
};

function numbPaths(rows, cols) {
    if(rows == 0 || cols == 0) return 1;
    
    return numbPaths(rows-1, cols) + numbPaths(rows, cols-1);
}


// DP (Top-down with Memoization)
// Use an 2D array mem to do memoization.



// DP (Bottom-up)
// Time: O(MN)
// Space: O(MN)
var uniquePaths = function(rows, cols) {
    if(rows <= 0 || cols <= 0) return 'bad input';
    
    let ar = Array(rows).fill(null).map(() => Array(cols));

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(i==0||j==0) ar[i][j] = 1;
            else {
                ar[i][j] = ar[i][j-1] + ar[i-1][j]
            }
        }
    }
    return ar[rows-1][cols-1]
}



// DP (Bottom-up, Linear Space)
var uniquePaths = function(rows, cols) {
    if(rows <= 0 || cols <= 0) return 'bad input';
    
    let ar = Array(rows).fill(null).map(() => Array(cols));

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(i==0||j==0) ar[i][j] = 1;
            else {
                ar[i][j] = ar[i][j-1] + ar[i-1][j]
            }
        }
    }
    return ar[rows-1][cols-1]
}


// DP (Top-down with Memoization)
// Time: O(MN) where MN is the number of subproblems.
// Space: O(MN)
var uniquePaths = function(rows, cols) {
    if(rows <= 0 || cols <= 0) return 'Bad Input';

    let memo = Array(rows).fill(null).map(() => Array(cols));
    return numPaths(rows-1, cols-1, memo);
}

function numPaths(i, j, memo) {
    if(i == 0 || j == 0) return 1;
    
    if(memo[i-1][j] == null) memo[i-1][j] = numPaths(i-1, j, memo);
    if(memo[i][j-1] == null) memo[i][j-1] = numPaths(i, j-1, memo);
    return memo[i-1][j] + memo[i][j-1];
}

