/*
Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

Return the linked list sorted as well.

Example 1:

Input: 1->2->3->3->4->4->5
Output: 1->2->5
Example 2:

Input: 1->1->1->2->3
Output: 2->3

PSEUDO CODE:
    - I need to create a dummyHead & set it to a cur, dummyHead will be return it
    - cur needs to start at the dummyHead, cur will be use to glue the next node and build a list
    - duplicate will help determine if the node has been seen before
    - if(head.val == head.next duplicate.val) duplicate++
    - else check
        - if(duplicate == 0)
            set cur.next = head
            cur = cur.next
            duplicate = 0
        - else
            duplicate = 0
    -inside the while loop move head = head.next
    -outside the loop cut the cur.next = null
    - return dummy.next

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let dummy = new ListNode(0),
    cur = dummy
  duplicate = 0;

  while (head) {
    if (head.next && head.val == head.next.val) {
      duplicate++
    }
    else {
      if (duplicate === 0) {
        cur.next = head
        cur = cur.next
        duplicate = 0
      }
      else {
        duplicate = 0
      }
    }
    head = head.next
  }
  cur.next = null;
  return dummy.next
};
