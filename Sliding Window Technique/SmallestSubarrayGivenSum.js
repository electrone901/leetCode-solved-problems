/*
Minimum Size Subarray Sum
Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

Example: 

Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.

*/

var smallestSubarraySum = function(target, ar) {
    if (ar.length == 0) return [];
    let sum = 0,
        min = Infinity,
        start = 0;

    for (let end = 0; end < ar.length; end++) {
        sum += ar[end];

        // condition is met, calculate min & shrinks window's size
        while (sum >= target) {
            min = Math.min(min, end - start + 1);
            sum -= ar[start];
            start++;
        }
    }
    return min == Infinity ? 0 : min;
};
smallestSubarraySum([4, 2, 2, 7, 8, 1, 2, 8, 10], 8); // 1 because ar[4]= 8 = target