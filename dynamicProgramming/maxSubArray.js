/*

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide a
*/

var maxSubArray = function(nums) {
    if(!nums) return 0;
    
    let length = nums.length;
    if(length === 1) return nums[0];
    
    // 1. use dynamic programming to calculate te maxSubArray, initialized a dp with empty elements 
    let dp = new Array(length);

    // 2. initialized maxSum, set it to first nums[0] & dh[0] to be use to calculate the second - n Element
    let maxSum = nums[0];
    dp[0] = nums[0];
    
    // 3. loop through the length, set dp[i] = max(dp[i-1] + nums[i], nums[i]) & calculate maxSum(dp[i], maxSum)
    for(let i = 1; i < length; i++) {
        dp[i] = Math.max(dp[i-1] + nums[i], nums[i]);
        maxSum = Math.max(dp[i], maxSum);
    }
    return maxSum;
};