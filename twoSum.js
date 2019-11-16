/*
Two Sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

    PSEUDO CODE:
    - this problem is pretty simple, the brute force is to have 2 loops i = 0 & j = i + 1 and check if(ar[i] + ar[j] == target)  return [i, j]

        OPTIMIZATION 
            - build a dictionary
            - loop through the arr and check if:
                - dif = target - nums[i] exist in the dic then return [dic.get(dif), i]
                - else set dic.set(nums[i], i);
*/

var twoSum = function(nums, target) {
    let dic = new Map();

    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];

        if (dic.has(difference)) {
            return [dic.get(difference), i];
        } else {
            dic.set(nums[i], i);
        }
    }
    return [];
}
console.log(twoSum([2, 7, 11, 15], 9));