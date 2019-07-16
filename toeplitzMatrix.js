/**
 Toeplitz Matrix
Easy

633

67

Favorite

Share
A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.

Now given an M x N matrix, return True if and only if the matrix is Toeplitz.
 

Example 1:

Input:
matrix = [
  [1,2,3,4],
  [5,1,2,3],
  [9,5,1,2]
]
Output: True
Explanation:
In the above grid, the diagonals are:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
In each diagonal all elements are the same, so the answer is True.
Example 2:

Input:
matrix = [
  [1,2],
  [2,2]
]
Output: False
Explanation:
The diagonal "[1, 2]" has different elements.
 NOTE: Just check for the edge at the end of the length to avoid outbound
 TIME COMPLEXITY: ROW * COL 
 SPACE COMPLEXITY: O(1)
 
 */
var isToeplitzMatrix = function(matrix) {
    for(let row = 0; row < matrix.length-1; row++) {
     for(let col = 0; col < matrix[0].length-1; col++) {
         if(matrix[row][col] != matrix[row+1][col+1]) return false;
     }
    }
    return true;
};