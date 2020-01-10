/**
 * @param {number[]} nums
 * @return {number}
  
Notes
We are given nums[-1] = nums[n] = negative infinity. This ensures we have at least 1 local maximum.
A simple O(n) solution exists by checking each element linearly, but let's try to solve it in O(log n) instead.
Algorithm
The key insight is that we only need to find 1 peak element. Any peak element will do.
By doing binary search and comparing A[mid] to A[mid + 1], we can see which side has a guaranteed peak maximum and recurse on just that side.


Time/Space Complexity
Time Complexity: O(log n)
Space Complexity: O(1)


 */
var findPeakElement = function(ar) {
    let low = 0,
        high = ar.length-1,
        mid;
    
    while(low < high) {
        mid = Math.floor((low + high)/2);
        
        if(ar[mid] > ar[mid+1]) {
            high = mid;
        }
        else {
            low = mid+1;
        }
    }
    return low;
};