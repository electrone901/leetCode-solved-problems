/*

Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2
Example 2:

Input: [1,3,5,6], 2
Output: 1
Example 3:

Input: [1,3,5,6], 7
Output: 4
Example 4:

Input: [1,3,5,6], 0
Output: 0
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(ar, target) {
    if(ar.length == 0) return 0;
    if(target <= ar[0]) return 0;
    if(target > ar[ar.length-1]) return ar.length;
    
    let low = 0,
        high = ar.length-1,
        mid = Math.floor((low + high)/2);
    
    while(low !== mid) {
        if(target == ar[mid]) return mid;
        if(target < ar[mid]) high = mid;
        else { low = mid; }
        mid = Math.floor((low + high)/2);
    }
    return high;
};
searchInsert([1,3,5,6],0); // 0