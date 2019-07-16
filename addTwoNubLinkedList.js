/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order and each of their nodes contain a single 
digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the 
number 0 itself.

Example:
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

PSEUDO CODE:
    The idea is to pass from left and right ends toward center. 
    For any position, if left max height is less than right max height, 
    the water in this position is left max height minux the height of current position, vice versa.
    
    - initialize:
        result node.val = 0
        cur = result
        carry = 0
    -  while(l1 || l2 || carry>0)
        then:
            let sum = carry
            if l1 != null then
                sum += l1.val
                l1 = l1.next;
            if(do the same with l2)
            initialize a new node = sum %10
            set it to be the next cur.next = node
            now move the cur to the cur.next
            reassign carry = sum/10
    finally return result.next;

TIME
Time: O(n) n = longer of two nodes l1 or l2
Space: O(1)
*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}
function addTwoNubLinkedList(l1, l2) {
    let result =  new ListNode(0),
        cur = result,
        carry = 0;
    while(l1 !== null || l2 !== null || carry > 0) {
        let sum = carry;
        if(l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }
        let node = new ListNode(sum % 10);
            cur.next = node;
            cur = cur.next;
            carry = Math.floor(sum / 10);
    }
    return result.next;
}