/*
Minimum Depth of Binary Tree
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down
to the nearest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

    PSEUDO CODE
        - 

*/

//Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}
function minDepth(root) {
    if(root == null) return 0;
    if(root.left !== null && root.right !== null) {
        return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
    }
    else {
        return Math.max(minDepth(root.left), minDepth(root.right)) + 1
    }
}
