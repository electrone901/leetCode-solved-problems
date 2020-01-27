/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var reverseList = function(head) {
    let iteratively = reverseListIterative(head);
    let recursively = reverseListRecursive(head, null);
    return (iteratively, recursively);
}
var reverseListIterative = function(head) {
    let newHead = null;
    while(head) {
        let next = head.next;
        head.next = newHead;
        newHead = head;
        head = next;
    }
    return newHead;
};

function reverseListRecursive(head, prev) {
    if(!head) return prev;
    
    let next = head.next;
    head.next = prev;
    return reverseListRecursive(next, head); //calling it with the next and oldHead which is head
}