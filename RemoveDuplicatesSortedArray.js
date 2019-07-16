
// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Given nums = [1,1,2]

var removeDuplicates = function(nums) {
    let j=0;
    for(let i=1; i < nums.length; i++) {
        if(nums[i] === nums[i-1]) {
            j++;
        }
        else {
            nums[i-j] = nums[i]
        }
    }
    return nums.length - j;
};
// => [1,2]