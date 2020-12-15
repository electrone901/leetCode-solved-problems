/*
Write a program to find the node at which the intersection of two singly linked lists begins.

For example, the following two linked lists:

            4 --> 1
                           -->8 --> 4 -->5-->
5 --> 6 --> 1

begin to intersect at node 8

Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Reference of the node with value = 8
Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.

PSEUDO CODE:
  - The idea is to check if  pointer1 is equal to pointer2 if it's then return pointer1 otherwise we need to loop
  - we can use a while(pointer1 !==pointer2) {
      then  move pointers to the next  & check if they are equals return pointer1
      if(pointer1 == null) set it to be pointer1 = headB
      if(pointer2 == null) set it to be pointer2 = head2
  }
  - the other edge case can be when they are equals outside the whhile loop so return it as well
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

  if (headA === null || headB === null) {
    return null
  }

  let pointer1 = headA,
    pointer2 = headB;

  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next
    pointer2 = pointer2.next

    if (pointer1 === pointer2) return pointer1

    if (pointer1 === null) pointer1 = headB

    if (pointer2 === null) pointer2 = headA
  }
  return pointer1
};
