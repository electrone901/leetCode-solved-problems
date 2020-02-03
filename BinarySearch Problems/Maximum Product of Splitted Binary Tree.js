/*
Given a binary tree root. Split the binary tree into two subtrees by removing 1 edge such that the product of the sums of the subtrees are maximized.

Since the answer may be too large, return it modulo 10^9 + 7.


Example 1:
Input: root = [1,2,3,4,5,6]
Output: 110
Explanation: Remove the red edge and get 2 binary trees with sum 11 and 10. Their product is 110 (11*10)


Example 2:
Input: root = [1,null,2,3,4,null,null,5,6]
Output: 90
Explanation:  Remove the red edge and get 2 binary trees with sum 15 and 6.Their product is 90 (15*6)


Example 3:
Input: root = [2,3,9,10,7,8,6,5,4,11,1]
Output: 1025


Example 4:
Input: root = [1,1]
Output: 1

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 
 Explanation
    Write a sub function s(TreeNode root) to get the sum of a sub tree.
    s is short for sub and sum.

    1. First pass, get the toal sum.
    2. Now we have the right total sum of the whole tree.
    3. Second pass, find the biggest product.
    
    Complexity
        Time O(N)
        Space O(height)
        We can save one pass if you we sacrifice more space.

 */
var maxProduct = function(root) {
    const MOD = 10 ** 9 + 7;
    const sums = new Set();
    const total = dfs(root, sums);
    let max = -Infinity;
    
    for(let sum of sums) {
        max = Math.max(max, sum * (total - sum));
    }
    return max % MOD;
};

function dfs(root, sums) {
    if(!root) return 0;
    root.val += dfs(root.left, sums);
    root.val += dfs(root.right, sums);
    sums.add(root.val);
    return root.val;
}