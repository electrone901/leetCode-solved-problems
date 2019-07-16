function isBST(root, min, max) {
    if (root == null) return true;
    
    /* if value of the node is out of max or min boundary, this binary tree is not a BST */
    let minCheck = min == null ? true : root.val > min;
    let maxCheck = max == null ? true : root.val < max;
    if (!minCheck || !maxCheck) return false;
    
    /* Recursively check the left and right subtree of the node. 
        Because of the definition of BST, 
        when checking the left subtree, 
        we set max boundary of left subtree to be the value of node. 
        When checking the right subtree, 
        we set the min boundary of right subtree to be the value of node.*/
    return isBST(root.left, min, root.val) && isBST(root.right, root.val, max);
}

function isValidBST(root) {
    /* Recursively check all the nodes in the binary tree to see if it is a BST */
    return isBST(root, null, null); 
}