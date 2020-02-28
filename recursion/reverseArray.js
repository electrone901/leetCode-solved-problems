// Reverse Array
// Write a function that accepts an array and returns a reversed copy of that array. Use recursion.
var arr = [1,2,3,4];
function reverseArray(arr) {
  let reverse = [];
  if(arr.length === 0) return reverse;
  else {
    let last = arr[arr.length-1];
    reverse = reverse.concat(last);
    return reverse.concat(reverseArray(arr.slice(0,-1)));
  }
}
  reverseArray(arr);// [4,3,2,1]