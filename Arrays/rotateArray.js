/*
Rotate Challenge - Fullstack JavaScript JumpStart

Rotate an array to the right by a certain number of "steps". 

For example, the array to rotate is: [1,2,3,4,5,6,7] and 
will be rotated 3 "steps".  The final array will look like: [5,6,7,1,2,3,4].  

Notice the position of each index is shifted to the right by 3 places.

*/

// Write Code Below
function rotate(array, nums) {
  if (nums === 0) return array;
  let result = [];
  let firstHalf = array.slice(array.length - nums);
  let secondHalf = array.slice(0, array.length - nums);
  return firstHalf.concat(secondHalf);
}
rotate([22, 11, 500, 92], 2); //[500,92,22,11]
