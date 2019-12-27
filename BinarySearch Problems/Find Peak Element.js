/*
A peak element is an element that is greater than its neighbors.

Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that nums[-1] = nums[n] = -∞.

Example 1:
Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.


Example 2:
Input: nums = [1,2,1,3,5,6,4]
Output: 1 or 5 
Explanation: Your function can return either index number 1 where the peak element is 2, 
             or index number 5 where the peak element is 6.
Note:Your solution should be in logarithmic complexity.

ALGORITHM:
This problem is similar to Local Minimum. And according to the given condition, 
num[i] != num[i+1], there must exist a O(logN) solution. So we use binary search for 
this problem.

If num[i-1] < num[i] > num[i+1], then num[i] is peak
If num[i-1] < num[i] < num[i+1], then num[i+1...n-1] must contains a peak
If num[i-1] > num[i] > num[i+1], then num[0...i-1] must contains a peak
If num[i-1] > num[i] < num[i+1], then both sides have peak
(n is num.length)
*/

function findPeakElement(ar) {
    let low = 0,
        high = ar.length-1;
    
    while(low < high) {
        // 1. case when we are almost at the end 
        if(low + 1 == high) {
            return ar[low] > ar[high] ? low: high;
        }
        // 2. when we are somewhere in the middle of Array
        if(ar[mid] > ar[mid - 1] && ar[mid] > ar[mid + 1]) {
            return mid;
        }

        // 3. when we are somewhere in the middle of Array in ascending e.g: 4 5 6
        if(ar[mid] > ar[mid - 1] && ar[mid] < ar[mid + 1]) {
            low = mid + 1;
        }
        // 4. mid is too high 
        else {
            high = mid -1;
        }
    }
    return low;
}

