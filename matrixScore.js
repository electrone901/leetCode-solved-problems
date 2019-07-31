/**
 * @param {number[][]} A
 * @return {number}
 [
    [0,0,1,1],
    [1,0,1,0],
    [1,1,0,0]
 ]
 
 
Output: 39
Explanation:
Toggled to [[1,1,1,1],[1,0,0,1],[1,1,1,1]].
0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
 
 https://leetcode.com/problems/score-after-flipping-matrix/discuss/143722/C%2B%2BJavaPython-Easy-and-Concise
 
 
 
 */
var matrixScore = function(A) {
    
    let M = A.length, 
        N = A[0].length,
        res = M;
    
    for(let j = 1; j < N; j++) {
        let nOnes = 0;
        for(let i = 0; i < M; i++) {
            nOnes += A[i][j] === A[i][0];
        }
        res = (res << 1) + Math.max(nOnes, M - nOnes);
    }
    return res;
        
        
    // swap values col? row: 0 to 1 and viceversa
//     for(let row = 0;  row < A.length; row++) {
//         if(A[row] == 0) {
//             for(let col = 0; col < A[0].length; col++) {
//                 A[row][col] = 1 - A[row][col];
//             }
//         }
//     }
    
    
//     let sum = A.length * Math.pow(2, A[0].length-1);
//     let count;
//     console.log("sum", sum)
    
//     // swap values: 0 to 1 and viceversa
//     for(let col = 1; col < A[0].length; col++) {
//         count = 0;
        
//         for(let row = 0; row < A.length; row++) {
//             if(A[row][col] === 1) count++;
//         }
        
//         if(count < A.length/2) count = A.length - count;
//         console.log("count", count)
        
//         sum += count *( Math.pow(2, A[0].length-1-col));
//         console.log("sum", sum)
//     }
//     return sum;
    
};






