/*
Given a root of a Binary Search Tree (BST) and a number num, implement an efficient function findLargestSmallerKey that finds the largest key in the tree that is smaller than num. If such a number doesn’t exist, return -1. Assume that all keys in the tree are nonnegative.

Analyze the time and space complexities of your solution.

For example:

For num = 17 and the binary search tree below:

alt

Your function would return:

14 since it’s the largest key in the tree that is still smaller than 17.
*/

/*********************************************************
 * CODE INSTRUCTIONS:      
 if(root < input)
 
 *
 * 1) The method findLargestSmallerKey you're            *
 *    asked to implement is located at line 26.          *
 * 2) Use the helper code below to implement it.         *
 * 3) In a nutshell, the helper code allows you to       *
 *    to build a Binary Search Tree.                     *
 * 4) Jump to line 71 to see an example for how the      *
 *    helper code is used to test findLargestSmallerKey. *
 *********************************************************/


// Constructor to create a new Node
function Node(key) {
    this.key = key;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
  
  // Constructor to create a new BST 
  function BinarySearchTree() {
    this.root = null;
  }
  
  BinarySearchTree.prototype.findLargestSmallerKey = function(n) {
    let root = this.root,
        result = -1;
    while(root) {
      if(n > root.key) {
        result = root.key;
        root = root.right;
      }
      else {
        root = root.left;
      }
    }
    return result;
  }
  /*
  Solution
  
  While the code to solve this question is pretty simple, it takes some understanding of binary search trees. There are two key parts for the algorithm.
  
  Part 1: traversing the tree
  A node in a binary search tree is larger than all keys in its left subtree and smaller than all keys i its right subtree. Starting from the root, for each node we choose its left or its right child as the next step, based on a comparison between that node’s key and num: If the current node holds a key smaller than num, we proceed to its right subtree looking for larger keys. Otherwise, we proceed to its left subtree looking for smaller keys.
  
  Part 2: finding the key
  During this iteration, when the current key is smaller than num, we store it as our result and keep looking for a larger key that is still smaller than num.
  
  It’s important to understand why we always store the last key without comparing it to the value stored beforehand. If we have stored a key before, then it means we have chosen to continue down the key’s right subtree. Therefore, all subsequent keys will be larger than any previously stored keys.
  Time Complexity: we scan the tree once from the root to the the leaves and do a constant number of actions for each node. if the tree is balanced the complexity is O(log(N)). Otherwise, it could be up to O(N).
  
  Space Complexity: throughout the entire algorithm we used only a constant amount of space, hence the space complexity is O(1).
  */
  
  
  
  // Creates a new node by a key and inserts it to the BST
  BinarySearchTree.prototype.insert = function(key) {
    var root = this.root;
  
    // 1. If the tree is empty, create the root
    if(!root) {
        this.root = new Node(key);
        return;
    }
  
    // 2) Otherwise, create a node with the key
    //    and traverse down the tree to find where to
    //    to insert the new node
    var currentNode = root;
    var newNode = new Node(key);
  
    while(currentNode !== null) {
        if(key < currentNode.key) {
            if(!currentNode.left) {
                currentNode.left = newNode;
                newNode.parent = currentNode;
                break;
            } else {
                currentNode = currentNode.left;
            }
        } else {
            if(!currentNode.right) {
                currentNode.right = newNode;
                newNode.parent = currentNode;
                break;
            } else {
                currentNode = currentNode.right;
            }
        }
    }
  }
  
  /*********************************************
   * Driver program to test above function     *
   *********************************************/
  
  // Create a Binary Search Tree
  var bst = new BinarySearchTree();
  bst.insert(20);
  bst.insert(9);
  bst.insert(25);
  bst.insert(5);
  bst.insert(12);
  bst.insert(11);
  bst.insert(14);
  
  var result = bst.findLargestSmallerKey(11);
  
  console.log("Largest smaller number is " + result);
  
  