/*
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


    PSEUDO CODE:
    -set variables:
        - rows = m.length
        - cols = m[0].length
    loop through 
        for(i=0 - n)
            for(j=0 - n) 
                check if(m[i+1]) check if next row exist then 
                    check if m[i][j] !== m[i+1][j+1] then return false 

        otherwise return true
*/
function toeplitz(matrix) {
    let rows = matrix.length,
        cols = matrix[0].length;
    
    for(let i =0; i < rows; i++) {
        for(let j =0; j < cols; j++) {
            if(matrix[i+1] !== undefined && matrix[i+1][j+1] !== undefined) {
               if(matrix[i][j] !== matrix[i+1][j+1]) {
                   return false;
               }
            } 
        }
    }
    return true;
}