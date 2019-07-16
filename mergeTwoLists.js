/** 
 Merge two sorted linked lists and return it as a new list. The new list should be made by splicing 
 together the nodes of the first two lists.

Example:
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

PSEUDOCODE:


    RECURSIVE APPROACH
    - If l1 || l2 is empty return l1 || l2
    - check if l1.val < l2.val then l1.next = merge(l1.next. l2) & return l1
    - else l2.next = merge(l2.next. l1) & return l2


    INTERATIVE APPROACH
    - defined a result obj:
        res = {val:null, next:null}
        cur = res
    - while(l1 && l2) then check:
        if l1.val < l2.val then cur.next = l1.val, l1 =l1.next
        else  cur.next = l2.val, l2 =l2.next
        
    - cur = l1 || l2
    - return res
*/

const mergeTwoLists = function(l1, l2) {
    if(!l1 || !l2) return !l1 || !l2;
    if(l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    else {
        l2.next = mergeTwoLists(l2.next, l1);
        return l2;
    }
}

const mergeTwoListsRecursive = function(l1, l2) {
    let result = {val: -1, next:null},
        cur = result;
    
    while(l1 && l2) {
        if(l1.val < l2.val) {
            cur.next = l1.val;
            l1 = l1.next;
        }
        else {
            cur.next = l2.val;
            l2 = l2.next;
        }
    }
    cur.next = l1 || l2;
    return result;
}


