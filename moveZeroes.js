/*
Move Zeroes
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note: You must do this in-place without making a copy of the array.
Minimize the total number of operations.

    PSEUDO CODE:
    - the trick for this problem is to remove/splice nums[i] == 0  & i--  therefore
    - loop through nums
        if(nums[i] == 0) {
            let remove = nums.splice(i, 1); //removes idx i, 1= true
            nums.push(remove);
            i--;
        }   

    EXPLANATION:
        [0,1,0,3,12], [1,0,3,12], [1,3,12,0, 0]
                         `           `
    for(i=0 to n) 
        if(nums[i] == 0) {
            remove = nums.splice(i, 1);
            [1,0,3,12], [1,3,12],

            nums.push(remove); [1,0,3,12,0], [1,3,12,0, 0]
            i = 1, 2
            i--; i =0, 1


        }
        i = 1, 2
*/
var moveZeroes = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            let remove = nums.splice(i, 1);
            nums.push(remove);
            i--;
        }
    }
    return nums;
}