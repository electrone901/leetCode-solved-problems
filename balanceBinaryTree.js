/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example 1:

Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
Return true.

Example 2:

Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
Return false.

    PSEUDO CODE:
        - in the main function return helperFun(root) >=0
        - in the helperFun
            check if root = null than return 0 cause its balance
            
            otherwise set:
                leftH = dfs(root.left)
                check if leftH < 0 return -1 cause its unbalanced 
            do the same with right node

            Note: it will do left most, then its right then goes back to parent
                  than parent's left & right
            check if abs(leftH -rightH) > 1 then return -1 cause its unbalanced

            return Math.max(left, right)+1
*/


function isBalanced(root) {
    return (dfs(root) >=0);
}

function dfs(root) {
    // if root = null that means it's balanced
    if(root === null) return 0;

    // check for less than 0 for left & right
    let leftHeight = dfs(root.left);
    if(leftHeight < 0) return -1;

    let rightHeight = dfs(root.right);
    if(rightHeight < 0) return -1;

    // check for greater than 0
    if(Math.abs(leftHeight - rightHeight) > 1) return -1;

    // returns the max difference + 1 cause we started @ 0
    return Math.max(leftHeight, rightHeight) +1;
}



