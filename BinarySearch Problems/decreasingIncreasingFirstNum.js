/*
Minimum in an array which is first decreasing then increasing
Given an array of N integers where array elements form a strictly decreasing and increasing sequence. The task is to find the smallest number in such an array.

Constraints: N >= 3

Examples:
Input: a[] = {2, 1, 2, 3, 4}
Output: 1

Input: a[] = {8, 5, 4, 3, 4, 10}
Output: 3 
Recommended: Please try your approach on {IDE} first, before moving on to the solution.
A naive approach is to linearly traverse the array and find out the smallest number. The time complexity will be thus O(N).

An efficient approach is to modify the binary search and use it. Divide the array into two halves use binary search to check if a[mid] < a[mid+1] or not. If a[mid] < a[mid+1], then the smallest number lies in the first half which is low to mid, else it lies in the second half which is mid+1 to high.
*/

function decreasingIncreasing(ar) {
    if(ar.length == 0 || ar.length < 2) {
      return -1;
    }
  
    let low = 0,
        high = ar.length-1,
        mid;
    
    while(low < high) {
      mid = Math.floor((low + high)/2);
  
      // the trick is realizing that if ar[mid] < ar[mid +1] then our answer is to the left cause it has the smallest numbs otherwise is the oppositive side 
      if(ar[mid] < ar[mid +1]) {
        high = mid;
      }
      else { low = mid +1;}
    }
    return low;
  }
  // decreasingIncreasing([2, 1, 2, 3, 4]); //1
  decreasingIncreasing([8, 5, 4, 3, 4, 10]); //3