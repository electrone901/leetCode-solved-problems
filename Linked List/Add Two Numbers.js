/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result = [];
    let carry = false;
    let head = new ListNode(0);
    let current = head;
    while(l1 !== null || l2 !== null) {
        let sum = 0;
        
        if(l1 == null) {//If l1 is null, only proceed l2
            sum += l2.val;
            l2 = l2.next;
        }
        else if(l2 == null) {//If l2 is null, only proceed l1
            sum += l1.val;
            l1 = l1.next;
        }
        else {
            sum += l1.val + l2.val;
            l1 = l1.next;
            l2 = l2.next;
        }
        
        if(carry) {
            // if carry exist then add 1 to sum
            sum++;
        } 
        
        // check if sum >= 10 then - 10 & carry = true to add +1 in the next iteration
        if(sum >= 10) {
            sum = sum -10;
            carry = true;
        }
        else {
            carry = false;
        }
        
        current.next = new ListNode(sum);
        current = current.next;
    }
    // last check if still remind 1 at the end of the iteration
    if(carry) {
        current.next = new ListNode(1);
    }
    return head.next; 
};