/*
MULTIDIMSUM

Write a method to find the sum of all the numbers in a multi-dimensional array of integers.

SAMPLE OUTPUT
Given a multi-dimensional Array: a = [1, [2, [3, 4]], [5, 6]],  multiDimSum would return 21.
We got 21 by adding up all the elements of the array: 1 + 2 + 3 + 4 + 5 + 6 = 21

HINT
This problem should probably take about 12 lines or less.
You may have to use recursion
*/
function multiDimSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if(Array.isArray(element)) {
            sum += multiDimSum(element);
        }
        else {
            sum = sum + element;
        }
    }
    return sum
}

console.log(multiDimSum([1, [2, [3, 4]], [5, 6]])) //21 
console.log(multiDimSum([10, [2, [[3], [10, 4]]], [5, 6]])) //40 
