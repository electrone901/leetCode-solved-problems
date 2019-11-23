/*
Sort Colors
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Example:

Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Follow up:

A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
Could you come up with a one-pass algorithm using only constant space?

*/
var sortColors = function(nums) {
    if (!nums || nums.length < 2) return nums;
    let i = 0,
        j = 0,
        k = nums.length - 1;

    while (j <= k) {
        // edge case for 0: will make sure it's 1 
        if (nums[j] === 0) {
            swap(nums, i, j);
            i++;
            j++;
        }
        // edge case for 1: will move on to next idx
        else if (nums[j] === 1) j++;

        // edge case for 2: will put 2 at the end 
        else {
            swap(nums, j, k);
            k--;
        }
    }
}

function swap(nums, i, j) {
    let save = nums[i];
    nums[i] = nums[j];
    nums[j] = save;
}

console.log(sortColors([2, 0, 2, 1, 1, 0])); //[0,0,1,1,2,2]

// ANOTHER OPTION  
function sortColors(nums) {
    function swap(i, j) {
        let save = nums[i];
        nums[i] = nums[j];
        nums[j] = save;
    }

    let start = 0;
    let end = nums.length - 1;
    let i = 0;

    while (i <= end) {
        const n = nums[i];
        if (n === 0) {
            swap(i, start);
            start++;
            i++;
        } else if (n === 2) {
            swap(i, end);
            end--;
        } else {
            i++;
        }
    }
}


// Another one 
var sortColors = function(nums) {
    nums.sort(function(a, b) { return a - b; });
};