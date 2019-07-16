/*
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that 
adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
should return true because it exist a root-to-leaf path 5->4->11->2 which sum is 22.

    PSUDOCODE:
        - check if root = null then its false
        - if(root.left = null && root.right = null && sum = root.val) return true because we find a solution
          since we are decreasing everything sum - root.val
        - otherwise just do recusion on 
            return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
*/

function hasPathSum(root, sum) {
    if(root == null) return false;
    if(root.left == null && root.right == null && sum == root.val) return true;
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
}
hasPathSum(root, 22);
// should return true because it exist a root-to-leaf path 5->4->11->2 which sum is 22.
// it will call the:
// hasPathSum(5, 22) => 5, 17
// hasPathSum(4, 17) => 4, 13
// hasPathSum(11, 13) => 11, 2
// hasPathSum(7, 2) => 7, -5 this is the leaf so we return  then moves on to call the rightside which is 
// root.right = 2 => hasPathSum(2, 2) => 2, 2 and this returns true