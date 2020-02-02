/*
Given a m * n matrix mat of ones (representing soldiers) and zeros (representing civilians), return the indexes of the k weakest rows in the matrix ordered from the weakest to the strongest.

A row i is weaker than row j, if the number of soldiers in row i is less than the number of soldiers in row j, or they have the same number of soldiers but i is less than j. Soldiers are always stand in the frontier of a row, that is, always ones may appear first and then zeros.


Example 1:
Input: mat = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]], 
k = 3
Output: [2,0,3]
Explanation: 
The number of soldiers for each row is: 
row 0 -> 2 
row 1 -> 4 
row 2 -> 1 
row 3 -> 2 
row 4 -> 5 
Rows ordered from the weakest to the strongest are [2,0,3,1,4]


Example 2:
Input: mat = 
[[1,0,0,0],
 [1,1,1,1],
 [1,0,0,0],
 [1,0,0,0]], 
k = 2
Output: [0,2]
Explanation: 
The number of soldiers for each row is: 
row 0 -> 1 
row 1 -> 4 
row 2 -> 1 
row 3 -> 1 
Rows ordered from the weakest to the strongest are [0,2,3,1]



*/

var kWeakestRows = function(mat, k) {
    let len = mat.length;
    if(len === 0) return [];
	
	 /* building an array of objects using destructuring  */ 
    let arrayObj = [];
    for(let row= 0; row < mat.length; row++) {
      let sum = 0;
      for(let col= 0; col < mat[row].length; col++) {
        if(mat[row][col] == 1) sum++;
      }
      arrayObj.push({row, sum});
    }

    /*  sorting array by valSum,in case of equal sum then return smallest index */
    arrayObj.sort((a,b) => {
      if(a.sum == b.sum) {
        return a.row - b.row;
      }
      else {
        return a.sum - b.sum;
      }
    })

    /* gets the k elements from sorted array */
    let result = [];
    for(let i = 0; i < k; i++) {
      result.push(arrayObj[i].row)
    }
    return result;
};
let mat = [
    [1,1,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,1,0,0,0],
    [1,1,1,1,1]];
    // let mat = [
    // [1,0,0,0,0],
    // [1,0,0,1,0],
    // [1,0,0,0,0],
    // [1,1,0,0,0]
    // // [1,1,1,1,1]
    // ];
    let k = 3;
    kWeakestRows(mat, k);// Output: [2,0,3]
    // kWeakestRows(mat, k);// Output: [ 0, 2, 1 ]