/*

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
             Total amount you can rob = 2 + 9 + 1 = 12.
*/

var rob = function(nums) {
    if(!nums) return 0;
    if(nums.length === 1) return nums[0];
    
    
    // make an array of same size
    let mark = new Array(nums.length);
    
    // set first 2 elements  so we can work with
    mark[0] = nums[0];
    mark[1] = Math.max(nums[0], nums[1]);
    
    // loop from 2 to last, assign mark[i] = max(nums[i] + mark[i-2],  mark[i-1]) what it does keeps highest number to the last i
    //Using Dynamic Programming to mark the max money in loop to keep track of the prev adjacent since
    // dp = [] keeps the provious we can use & set dp[i]= Math.max(ap[i-2] + nums[i], dp[i-1])
    for(let i = 2; i < len; i++) {
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]);
        maxAmount = Math.max(maxAmount, dp[i]);
    }
    return maxAmount;
};