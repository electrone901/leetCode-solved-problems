/*
Symmetric Tree

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around 
its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
Note:
Bonus points if you could solve it both recursively and iteratively.

    PSEUDO CODE:
        - the idea is to 

*/
function isSymmetric(root) {
    return (root == null) ? true: check(root.left, root.right);
}

function check(left, right) {
    if(left == null && right == null) return true;
    if(left == null || right == null || left.val != right.val) return false;
    return check(left.left, right.right) && check(left.right, right.left);
}