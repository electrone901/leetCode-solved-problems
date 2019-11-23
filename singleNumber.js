/*
Single Number
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
*/

function singleNumber(nums) {
    let dic = {};

    for (let i = 0; i < nums.length; i++) {
        if (!dic[nums[i]]) dic[nums[i]] = true;
        delete dic[nums[i]];
    }
    return Object.keys(dic)[0];
}

// time O(n)
// space O(1)
function singleNumber(nums) {
    let num = 0;

    for (let n of nums) {
        num ^ = n;
    }
    return num;
}