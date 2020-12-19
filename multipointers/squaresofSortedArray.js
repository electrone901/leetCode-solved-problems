/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.



Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
*/

/*
  PSEUDO CODE:
      We're going to use multipointer technique to  solve it. The main idea is to to create an empty array with 0 or space. JS by defaul will create space when u insert a value an idx > 0.

      APPROACH:
         - create your arr
         - set left, right, idxToInsert
         - while(left <= right)
            - calculate sqLeft & sqRigth
            - if(sqLeft > sqRigth) then arr[idxToInsert] = sqLeft
            - else arr[idxToInsert] = sqRight
            - idxToInsert--
        - at the end return arr

       l
  [-4,-1,0,3,10]
                         r
  [0, 1, 9, 16,100]
  */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let result = new Array(nums.length).fill(0),
    left = 0,
    right = nums.length - 1,
    idx = nums.length - 1;

  while (left <= right) {
    let sqLeft = Math.pow(nums[left], 2),
      sqRight = Math.pow(nums[right], 2);

    if (sqLeft > sqRight) {
      result[idx] = sqLeft;
      left++
    }
    else {
      result[idx] = sqRight;
      right--
    }
    idx--
  }
  return result
};
