/*
Given an array nums, there is a sliding window of size k which is moving from the very 
left of the array to the very right. You can only see the k numbers in the window. 
Each time the sliding window moves right by one position. Return the max sliding window.

Example:

Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
Output: [3,3,5,5,6,7] 
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7


Basically we need to build a monotomic queue:
A monotonic Queue is a data structure the elements from the front to the end is 
strictly either increasing or decreasing. For example, there is an line at the hair salon, and you would naturally start from the end of the line. However, if you are allowed to kick out any person that you can win at a fight, if every one follows the rule, then the line would start with the most powerful man and end up with the weakest one. This is an example of monotonic decreasing queue. We have either increasing or decreasing queue.
Monotonic increasing queue: to push an element e, starts from the rear element, we pop out element s≥e(violation);
Monotonic decreasing queue: we pop out element s<=e (violation). Sometimes, we can relax the strict monotonic condition, and can allow the stack or queue have repeat value.

Algorithm:
Represent the sliding window using a queue: stores values
Before adding a new element to the queue, we discard index if it's no longer in the sliding window
Remove indices that can no longer represent a max.
The head of the queue will always be an index i where A[i] is the maximum in the corresponding "sliding window".
Notice the indices in queue will always be increasing, representing values from the array that will always be decreasing

Complexity
time O(n)
space O(k)

THE WALK THROUGH:
    Monotonic_queue  max 
    [1]              -      push 1 
    [3]              -      then we remove it cause 3 > 1
    [3, -1]          3      push -1 
    [3, -1, -3]      3      again 3 > -1
    [5]              5      5 > 3
    [5, 3]           5      5 > 3
    [6]              6      6 > 5
    [7]              7      7 > 6

    res = [3, 3, 5,5,6,7]
*/

function maxSlidingWindow(ar, target) {
    let res = [],
        queue = [];

    for (let i = 0; i < ar.length; i++) {
        while (queue.length - 1 >= 0 && ar[i] > queue[queue.length - 1]) {
            queue.pop();
        }

        queue.push(ar[i]);
        let j = i + 1 - target;
        if (j >= 0) {
            res.push(queue[0]);
            // if queue biggest element is about to exit the window remove it from queue
            if (ar[j] == queue[0]) queue.shift();
        }

    }
    return res;
}
maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)