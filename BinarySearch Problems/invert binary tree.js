/*
Invert a binary tree.
Invert  node.left with node.right
Example:
Input:
          4
        /   \
        2     7
      /  \   /  \
      1   3 6   9

Output:
          4
        /   \
       7     2
     /  \     /   \
   9   6  3   1


   PSEUDO CODE:
   1. take the root & check if it exist
        if(root === null) return root;
   2. swap leftNode with rightNode, save the left in tamp var
      const leftNode = root.left
      root.left = root.right
       root.right = leftNode
   3. repeat step 1 & 2 until the leaf node => RECURSION
      invert( root.left )
      invert( root.right )
      return root;
*/
const invertTree = (root) => {
    if (root === null) return root;

    const leftNode = root.left;
    root.left = root.right;
    root.right = leftNode;
    invertTree(root.left);
    invertTree(root.right);
    return root;
}
invertTree([4, 2, 7, 1, 3, 6, 9]) // =>return line 12