/*
Matrix Spiral Copy
Given a 2D array (matrix) inputMatrix of integers, create a function spiralCopy that copies inputMatrix’s values into a 1D array in a spiral order, clockwise. Your function then should return that array. Analyze the time and space complexities of your solution.

Example:

input:  inputMatrix  = [ [1,    2,   3,  4,    5],
                         [6,    7,   8,  9,   10],
                         [11,  12,  13,  14,  15],
                         [16,  17,  18,  19,  20] ]

output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]
See the illustration below to understand better what a clockwise spiral order looks like.
*/
function printSpiral(matrix) {
if(matrix.length == null || matrix[0].length == null) return [];

    let startRow = 0
        endRow = matrix.length-1,
        startCol = 0,
        endCol = matrix[0].length-1,
        res = [];
    
    while(startRow <= endRow && startCol <= endCol) {
        // right 
        for(let i = startCol; i <= endCol; i++) 
            res.push(matrix[startRow][i]);
        startRow++;
        // down
        for(let i = startRow; i <= endRow; i++) 
            res.push(matrix[i][endCol]); 
        endCol--;
        // left
        if(startCol <= endCol) {
            for(let i = endCol; i >= startCol; i--) 
                res.push(matrix[endRow][i]);
            endRow--;
        }
        // up 
        if(startRow <= endRow) {
            for(let i = endRow; i >= startRow; i--) 
                res.push(matrix[i][startCol]);
            startCol++;
        }
    }
    return res;  
}
let inputMatrix  = [ 
    [1,    2,   3,  4,    5],
    [6,    7,   8,  9,   10],
    [11,  12,  13,  14,  15],
    [16,  17,  18,  19,  20] 
];
spiralCopy(inputMatrix);





