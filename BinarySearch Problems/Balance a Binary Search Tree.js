/*
Given a binary search tree, return a balanced binary search tree with the same node values.

A binary search tree is balanced if and only if the depth of the two subtrees of every node never differ by more than 1.

If there is more than one answer, return any of them.



Example 1:
1
 \
  2
   \
    3
     \
      4

it has to be balance:
      2
      /\
     1  3
         \
          4
Input: root = [1,null,2,null,3,null,4,null,null]
Output: [2,1,3,null,null,null,4]
Explanation: This is not the only correct answer, [3,1,4,null,2,null,null] is also correct.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    if (root === null) return;
    storeBSTNodes(root, (ar = []));
    let height = ar.length;
    return build(ar, 0, height - 1);
};

function build(ar, start, end) {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);
    let midNode = ar[mid];
    midNode.left = build(ar, start, mid - 1);
    midNode.right = build(ar, mid + 1, end);

    return midNode;
}

function storeBSTNodes(root, ar) {
    if (root === null) return;
    storeBSTNodes(root.left, ar);
    ar.push(root);
    storeBSTNodes(root.right, ar);
}