/*
Given a linked list, swap every two adjacent nodes and return its head.
You may not modify the values in the list's nodes, only nodes itself may be 
changed.

Example:
Given 1->2->3->4, you should return the list as 2->1->4->3

PSEUDO CODE:
    - if head = null || head.next = null return head
    - otherwise
        save cur as temp & over write it to be the next val like temp = head.next.val
        and head.next.val = temp 
        
        check if head.next.next = null return head
        otherwise do recurse(head.next.next) this will repeat all
        finally return head
        
*/
function swapNodesInPairs(head) {
    if(head == null || head.next == null) {
        return head;
    }
    let temp = head.val;
    head.val = head.next.val;
    head.next.val = temp;
    if(head.next.next == null) return head;
    swapNodesInPairs(head.next.next);
    return head;
}
swapNodesInPairs(head)