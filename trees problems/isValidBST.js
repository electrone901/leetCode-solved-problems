/*
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true

*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * Time/Space Complexity
Time Complexity: O(n)
Space Complexity: O(log n) if balanced tree. O(n) if not balanced.
 */
var isValidBST = function(root) {
  return isValid(root, -Infinity, Infinity);
};

function isValid(node, min, max) {
  if (node === null) return true;
  if (node.val <= min || node.val >= max) return false;
  return (
    isValid(node.left, min, node.val) && isValid(node.right, node.val, max)
  );
}
