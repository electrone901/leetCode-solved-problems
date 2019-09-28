/*
Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root
 node of a BST.

Calling next() will return the next smallest number in the BST.
Example:

BSTIterator iterator = new BSTIterator(root);
iterator.next();    // return 3
iterator.next();    // return 7
iterator.hasNext(); // return true
iterator.next();    // return 9
iterator.hasNext(); // return true
iterator.next();    // return 15
iterator.hasNext(); // return true
iterator.next();    // return 20
iterator.hasNext(); // return false
 

Note:

next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of
 the tree.
You may assume that next() call will always be valid, that is, there will be at least a next smallest
 number in the BST when next() is called.
*/

// Definition for a binary tree Node
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.rigth = null;
}


let stack = [];
const BSTIterator = function(root) {
    pushLeft(root);
}

function pushLeft(node) {
    while(node !== null) {
        stack.push(node);
        node = node.left;
    }
}

// return the smallest numb
BSTIterator.prototype.next = function() {
    let node = stack.pop();
    pushLeft(node.rigth);
    return node.val;
}

// returns whether we have a next smallest numb
BSTIterator.prototype.hasNext = function() {
    return !stack.length == 0;
}

// instantiated and call it
var iterator = new BSTIterator(root);
iterator.next();    // return 3
iterator.next();    // return 7
iterator.hasNext(); // return true
iterator.next();    // return 9
iterator.hasNext(); // return true
iterator.next();    // return 15
iterator.hasNext(); // return true
iterator.next();    // return 20
iterator.hasNext(); // return false





