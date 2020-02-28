/*
PAIRSUM

Given an array of numbers sorted in ascending order (least to greatest), and a separate number (a "sum"), determine if any 2 numbers in the array add up to the sum. Return true if any 2 different numbers within the array add up to sum. Return false if no 2 numbers in the array add up to sum. 
 
Return true or false based on whether any 2 different numbers in the array add up to sum.


*/
function pairSum(arr, target){

    let start = 0;
    let end = arr.length-1;
    while(start < end) {
        if(arr[start] + arr[end] === target) return true;
        else if(arr[start] + arr[end] < target) start++;
        else if(arr[start] + arr[end] > target) end--;   
    }
    return false;
}

// normal test cases
console.log(pairSum([1, 1, 2, 3, 4, 5], 7) ) //true
console.log(pairSum([1, 1, 2, 3, 4, 5, 6], 6) ) //true
console.log(pairSum([1, 2, 3, 4, 5], 10) ) //false
console.log(pairSum([1, 2, 3, 7, 8], 7) ) //false
console.log(pairSum([1, 2, 3, 4, 5], 2) ) //false
  
  