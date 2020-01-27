/*
Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example 1:
Given 1->2->3->4, reorder it to 1->4->2->3.

Example 2:
Given 1->2->3->4->5, reorder it to 1->5->2->4->3.

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
 * @return {void} Do not return anything, modify head in-place instead.
 
 Pseudo code:
    1. Find mid point
    2. Use mid to create L1 & L2. Reverse L2 from slow to the end
    3. Merge both lists one by one & return the list
 */
var reorderList = function(head) {
    if(head == null || head.next == null) return;
    
    let prev = null,
        slow = head,
        fast = head,
        l1 = head;
    // Find mid point & get l1
    while(fast != null && fast.next != null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null;
    
    // reverse l2
    let l2 = reverse(slow);
    
    // merge both lists
    merge(l1, l2);
};

function reverse(head) {
    let cur = head,
        prev = null,
        next = null;
    
    while(cur != null) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}

function merge(l1, l2) {
    while (l1 != null) {
        let n1 = l1.next, 
            n2 = l2.next;
        l1.next = l2;
        
        if (n1 == null)
          break;
            
        l2.next = n1;
        l1 = n1;
        l2 = n2;
    }
}