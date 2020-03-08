/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/
function findPair(ar, target) {
  let difference = 0;
  let dictinary = {};

  for(let i = 0; i < ar.length; i++) {
    let ele = ar[i];
    difference = target - ele;
    let found = dictinary[difference];
    if(found !== undefined) {
      return [found, i];
    }
    else {
      dictinary[ele] = i;
    }
  }
  return [];
}
// console.log(findPair([2, 7, 11, 15], 9)); 