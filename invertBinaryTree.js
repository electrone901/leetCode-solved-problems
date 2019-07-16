/*
Invert a binary tree
    The idea is to invert a bst such fliping it or mirroring it.
Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1

PSEUDO CODE:
    - this problem is pretty simple
    - if root = null return root
    - otherwise:
         save temp = root.left
         root.left = root.right
         root.right = temp
    - then you can do recursion for the other levels:
        invertTree(root.left)
        invertTree(root.right)
    - finally return the root;
*/
var invertTree = function(root) {
    if(root == null) return root;

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left)
    invertTree(root.right)
    return root;
}

