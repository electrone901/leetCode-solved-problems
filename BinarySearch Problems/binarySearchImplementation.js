/*
Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.


Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(ar, target) {
    let low = 0;
    let high = ar.length - 1;
    let middle = Math.floor((low + high) / 2);

    while (low <= high) {
        if (ar[middle] === target) {
            return middle;
        } else if (ar[middle] < target) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }

        middle = Math.floor((low + high) / 2);
        4
    }
    return -1;
};