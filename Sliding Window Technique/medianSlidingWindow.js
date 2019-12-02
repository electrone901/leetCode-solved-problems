/*
Given an array nums, there is a sliding window of size k which is moving from the very
left of the array to the very right. You can only see the k numbers in the window. 
Each time the sliding window moves right by one position. Your job is to output the median
array for each window in the original array

Median:  To calculate the median first we need to sort the list in ascending or descending
order. If the number of elements are even, then the median will the average of two numbers 
in the middle

Solution: this problem also falls into the fixed type of sliding window technique, but it 
needs more thought on how we could maintain the state of the window. A naive approach 
would be as the window moves from left to right, we can sort the numbers within the window 
and find the median. 

The time complexity of it is O( (n — k) * klogk). Notice, the naive approach does not 
maintain any state of the sliding window, every time we move the window, we sort the 
window like a new array of numbers. Thus, we maintain an array of size k which is always 
sorted of all the element within the window. Also notice, once we find the first window, 
and as we remove the oldest element from the window and add the next element, it is almost 
sorted, we just need to fix the oldest element removal and new element insertion.

This could be further divided into: removal and insertion, which could be done in O(k) 
time complexity and the overall complexity could be reduced to O ((n — k) * k).
The removal is easy, we only need to find the oldest element in the window, remove it 
and move all the elements on its right one step left. The insertion is easy too, just 
like insertion sort, we start from the end of the sorted part and move all the element 
that is larger than the target one step right.

*/
function medianSlidingWindow(ar, target) {

}