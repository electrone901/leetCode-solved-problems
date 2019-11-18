/*

Convert Sorted Array to Binary Search Tree
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5

    PSEUDO CODE 
    - check if(nums!) return null
    - return constructBSTRecursive(nums, left = 0, nums.length-1);

    - create function
    constructBSTRecursive(nums, left, right) {
        find: 
        mid = Math.floor(left + (right - left) / 2)
        cur = new TreeNode(nums[mid])
        cur.left = constructBSTRecursive(nums, left, mid-1)
        cur.right = constructBSTRecursive(nums, mid+1, right)
        return cur; 
    }

*/

var sortedArrayToBST = function(nums) {
    if (nums == null || nums.lengt == 0) {
        return null;
    }
    return constructBSTRecursive(nums, 0, nums.length - 1);
}

var constructBSTRecursive = function(nums, left, right) {
    if (left > right) {
        return null;
    }

    let mid = Math.floor(left + (right - left) / 2);
    let node = new TreeNode(nums[mid]);
    node.left = constructBSTRecursive(nums, left, mid - 1);
    node.right = constructBSTRecursive(nums, mid + 1, right);
    return node;
}