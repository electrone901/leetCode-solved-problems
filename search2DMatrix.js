/*
Search a 2D Matrix
Write an efficient algorithm that searches for a value in an m x n matrix. 
This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example 1:
Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true

    PSEUDO CODE:
        - create var:
            colLen = m[0].length
            row = m.length-1
            col = 0
        - loop through the matrix
            while(row >= 0 && col < colLen)
                then check
                    1. if matrixVal == target return true 
                    2. if matrixVal > target 
                        then check
                        if col != 0 return false cause means that is not in the matrix since we move forward before
                        else row--
                    3. col++
        - at the end of the while return false because we didnt find it
*/
function searcheMatrix(matrix, target) {
    let colLen = matri[0].length;
    let row = matrix.length-1;
    let col = 0;

    while(row >= 0 && col < colLen) {
        if(matrix[row][col] == target) return true;
        if(matrix[row][col] > target) {
            if(col != 0) return false;
            else { row-- }
        }
        else {
            col++
        }
    }
    return false;
}
// TIME COMPLEXITY: O(log m + log m)
// SPACE COMPLEXITY:O(1)



