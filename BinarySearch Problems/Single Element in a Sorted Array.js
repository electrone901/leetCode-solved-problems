/*
You are given a sorted array consisting of only integers where every element appears 
exactly twice, except for one element which appears exactly once. Find this single 
element that appears only once.

 
Example 1:
Input: [1,1,2,3,3,4,4,8,8]
Output: 2

Example 2:
Input: [3,3,7,7,10,11,11]
Output: 10

Algorithm:
First we know that the index of single element must be even since the number of 
elements before the single element is 2 * element.

For the elements to the left of the single element in array:

For odd index i, ar[i] = ar[i - 1];
For even inedx i, ar[i] = ar[i + 1];

For example:
[1  1  3  5  5]
 0  1  2  3  4

Time complexity: O(logn)
Space complexity: O(1)

Note: Your solution should run in O(log n) time and O(1) space.

*/
function singleNonDuplicate(ar) {
    let low = 0,
        n = ar.length,
        high = n-1;
        

    while(low < high) {
        let mid = Math.floor((low + high)/2);

        // 1. if mid is even then find high range
        if(mid % 2 == 0) {
            if(mid + 1 < n && ar[mid] == ar[mid +1]) {
                low = mid +2;
            }
            // mid is bad then go left 
            else {
                high = mid;
            }
        }
        // 2. mid is odd then find the high range 
        else {
            if(mid - 1 >= 0 && ar[mid] == ar[mid - 1]){
                low = mid + 1;
            }else{
                // mid is "bad", find left range
                high = mid - 1; 
            }
        }
    }
    return ar[low];
}