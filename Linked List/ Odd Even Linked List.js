/*
Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example 1:

Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL
Example 2:

Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL
Note:

The relative order inside both the even and odd groups should remain as it was in the input.
The first node is considered odd, the second node even and so on ...
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * TIME COMPLEXITY:
 *  Simple O(N) time, O(1), space.
 * PSEUDO CODE
 * The trick is to realize that we need to manipulate pointers so saving odd, even, and evenHead
 * - we can have a while loop that it checks if we have even & even.next and as we loop through it we will be changing the pointers to
 *      odd.next  = even.next
 *      move odd = odd.next,
 *
 *      even = odd.next ,
 *      even =  even.next
 * then outside the while loop we should do a
 *   odd.next = evenHead
 *
 */
var oddEvenList = function (head) {
    let odd = head;
    let even = head.next;
    let evenHead = head.next;

    while (even != null && even.next != null) {
        // links odd.next to next odd node
        odd.next = even.next;
        // updates odd to be the next
        odd = odd.next;

        // links even.next to next even node
        even.next = odd.next;
        // updates even to be the next
        even = odd.next;
    }
    // links the evenHead
    odd.next = evenHead;
    return head;
};
