/**
FOLLOW => 
UMPIRE
    Understand
    Match
    Plan / Pseudocode
    Implement
    Reflect and verify
    Evaluate performance




Linked Lists really shine when we confine our operations to one end of the data structure and also are dealing with arbitrary, 
yet small sizes (number of list nodes). The linked list is a good choice in this case because it is both simple to work with and 
efficient.

Lists do not do well when you want to support random access, i.e., work at any arbitrary location in the list. This is because the 
only way to get to the back of the list, is to go one node at a time asking for the next item down until you reach your desired 
location.

We also don't like to store large amounts of information in linked lists because for every value you store you pay an extra 
storage penalty of Node object that decorates the item you want to store. Let's summarize the complexity tradeoffs as follows:
Time and Space Complexity
Best cases: Accessing / Search : O(1) Inserting at head: O(1) Deleting at head: O(1)

Worst cases: Accessing / Searching : O(N) Inserting: O(N) Deleting: O(N)

Best Case occurs when the node is at the head of the list and Worst Case is when the node is at the end of the list.

Glossary
Node - a position in a list that contains the value of whatever is stored at the position as well as at least one reference to another node.
Head — node at the beginning of the list.
Tail — node at the end of the list.
Sentinel — a dummy node, typically placed at the head or end of the list to help make operations simpler (e.g., delete) or to indicate the termination of the list.
 
Patterns List
Dummy Head: This is a very common linked list technique as it typically saves you creating special edge condition logic in 
order to operate on the head of a linked list with some algorithms. This technique only involves creating one extra pointer, 
the dummy head, that will point to your final answer or list that you will return. This technique is much easier to 
demonstrate with an example.
Delete Node: Say you are asked to delete a node in a linked list given the value of the node you want to delete. 
Furthermore you are told that you can assume the values are unique.

Merge Sorted Lists
Sorting and maintaining sorted order is a fundamental operation to think about on any data structure. So this is a doubly useful example to motivate the dummy head technique. We will use the problem formulation in Merge Two Sorted Lists.

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists. Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
In [12]:
class Node(object):
    def __init__(self, v):
        self.val = v
        self.next = None
    def __repr__(self):
        return f"{self.val} --> {self.next}"
    def insert(self, v):
        n = Node(v)
        n.next = self
        return n
    
def merge(l1, l2):
    h = Node("dummy") # Dummy head technique
    p = h
    while l1 or l2:
        if not l1:
            p.next = l2
            l2 = l2.next
        elif not l2:
            p.next = l1
            l1 = l1.next
        elif l2.val < l1.val:
            p.next = l2
            l2 = l2.next
        else:
            p.next = l1
            l1 = l1.next
        p = p.next   # It is very common to forget to iterate this list as well
    return h.next # Popping off the dummy head
    
list1 = Node(4).insert(2).insert(1)
list2 = Node(4).insert(3).insert(1)
print(f"Input: {list1}, {list2}")
print(f"Output: {merge(list1, list2)}")
Input: 1 --> 2 --> 4 --> None, 1 --> 3 --> 4 --> None
Output: 1 --> 1 --> 2 --> 3 --> 4 --> 4 --> None
The main technique used here and is useful for helping you to clean up edge case bookkeeping for any linked list solution is the Dummy Head. This is a simple way to both deal with the edge cases of being given one empty list or another as well as simplifying the loop code as our invariant is that the next pointer in the dummy headed list will always be the result of the next pass through the loop. A simple mistake, but can be frustrating is to forget to increment the dummy pointer at the end of the loop code.



Multiple Pass: Most computations on a list will require O(N) time complexity, so a simple but very useful technique is to pass through the list a constant number of times to calculate some summary of the list that will simplify your algorithm. One example that we see a lot is the need to calculate the length of the list. That sounds simple enough, but let's see an example to motivate this technique better.
            I.e: Write a program to find the node at which the intersection of two singly linked lists begins. For example, the following two linked lists:

                A:          a1 → a2
                                ↘
                                    c1 → c2 → c3
                                ↗            
                B:     b1 → b2 → b3


                begin to intersect at node c1.
Notes:

If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in O(n) time and use only O(1) memory.
We will not cover the full solution to this problem here, but instead cover two insights that can make the solution much simpler. The first insight is that once a list has intersected with another list the rest of the list is identical. Next, a list can only be identical if it is the same length. With these insights a strawman solution is to ignore any prefix of the longer of the two lists because it can't be part of the intersection. The rest of the algorithm also flows much easier after that. So let's just take the sub-task of taking two lists of any length and returning references to two lists of the same length. In the example above it would be lists starting at a1 and b2.

class Node(object):
    def __init__(self, v):
        self.val = v
        self.next = None

    def __repr__(self):
        return f"{self.val} --> {self.next}"

    def insert(self, v):
        n = Node(v)
        n.next = self
        return n

def get_len(ll):
    l = 0
    while ll:
        l += 1
        ll = ll.next
    return l

def make_same_length(ll1, ll2):
    len1 = get_len(ll1)
    len2 = get_len(ll2)
    if len1 > len2:
        long_ll, short_ll = ll1, ll2
        long_len, short_len = len1, len2
    else:
        long_ll, short_ll = ll2, ll1
        long_len, short_len = len2, len1
    while long_len > short_len:
        long_len -= 1
        long_ll = long_ll.next
    return short_ll, long_ll

common = Node('c1')
short = common.insert('a2').insert('a1')
long = common.insert('b3').insert('b2').insert('b1')
make_same_length(short, long)
Output:
"(a1 --> a2 --> c1 --> None, b2 --> b3 --> c1 --> None)"


Two Pointer: fast and slow pointers usually use to find if a linked List has a cycle


Hints
 Delete Node in Linked List
There is no way to delete the current node without a reference to the parent; think about solutions that allow a logical deletions without a literal deletion.

Reverse Linked List
Think about which pointers need to be updated, and which of their values need to be temporarily stored.

Linked List Cycle
Take a look at this document.

Add two numbers (LSF)
Think about how we can map the math operations to operations on linked list.

Enumerate the boundary conditions carefully.

Odd Even Linked Lists
First make two separate lists, and then join them together with a single pointer assignment.




*/
