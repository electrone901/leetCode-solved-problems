/*
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
Input: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4

It's actually to keep recording the max n*n window at each cell of the matrix.
At each cell, we define that the dynamic programming status at that cell is - if I am the most right-bottom guy of a square, how big the square I can build. With this definition, this status will be transferrable to the guys, right, below, and right below me.
*/

function largestSquare(matrix) {
    if(!matrix.length || !matrix[0].length) return 0;
  
    let dp = matrix.slice(), //returns a matrix copy
        row = matrix.length,
        col = matrix[0].length,
        max = 0;
  
    // get row max
    for(let i=0; i < row; i++){
      max = Math.max(max, matrix[i][0]);
    }
  
    // get col max
    for(let i= 0; i < col; i++){
      max = Math.max(max, matrix[0][i]);
    }
  
    for(let i=1; i < row; i++){
      for(let j=1; j < col; j++) {
        if(matrix[i][j] == '0') continue;
  
        // we need 3 other cells to make a square:  dp[i-1][j-1],dp[i-1][j], dp[i][j-1] then + 1 to increase the number of squares 
        dp[i][j] = Math.min(dp[i][j-1], Math.min(dp[i-1][j], dp[i-1][j-1]))+ 1;
        max = Math.max(max, dp[i][j]);
      }
    }
    return max * max;
  }
  largestSquare(matrix);
  