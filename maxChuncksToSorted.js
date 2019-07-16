/*
Max Chunks To Make Sorted II
This question is the same as "Max Chunks to Make Sorted" except the integers of the 
given array are not necessarily distinct, the input array could be up to length 2000, and the elements 
could be up to 10**8.

Given an array arr of integers (not necessarily distinct), we split the array into some number of 
"chunks" (partitions), and individually sort each chunk.  After concatenating them, 
the result equals or the same as the original sorted array. What is the most number of chunks we could have made?

Example 1:
Input: arr = [5,4,3,2,1]
Output: 1
Explanation:
Splitting into two or more chunks will not return the required result.
For example, splitting into [5, 4], [3, 2, 1] will result in [4, 5, 1, 2, 3], which isn't sorted.

Example 2:
Input: arr = [2,1,3,4,4]
Output: 4
Explanation:
We can split into two chunks, such as [2, 1], [3, 4, 4].
However, splitting into [2, 1], [3], [4], [4] is the highest number of chunks possible.

PSEUDO CODE:
    - Iterate through the array
    - each time all elements to the left are smaller (or equal) to all elements to the right then 
      there is a new chunck.
    - use two arrays to store the left max and right min to achieve O(n) time complexity. 
    - Space complexity is O(n) too.
    - For an element, if all the numbers to its left are smaller or equal to all the numbers to its right, 
        we can always insert a split point between the element and its next element which separate the array 
        into two parts and after we sort the two parts individually, 
        the concatenation of them will be a sorted array.
Example:
index: 0 1 2 3 4
arr[i] 2 1 3 4 4
maxLeft 2 2 3 4 4
minRight 1 1 3 4 4

when i = 1, maxLeft[i] <= minRight[i + 1] (maxLeft[i] includes the i-th number itself but minRight[i +1] only 
counts the numbers to its right), then we can insert a split point between index 1 and 2. This will generate
two parts [2,1] and [3,4,4]. When we sort the two parts individually, the concatenation of the sorted arrays
will also be a sorted array. [1,2] + [3,4,4] => [1,2,3,4,4].

When i = 2, 3. The same analysis apply to them.

*/
function maxChucnksToSorted(ar) {
    let n = ar.length;
    maxLeft = new Array(n);
    minRight = new Array(n);

    maxLeft[0] = ar[0];
    for(let i = 1; i < n; i++) {
        // sets the max btw left & curElement
        maxLeft[i] = Math.max(maxLeft[i - 1], ar[i]);
    }

    minRight[n - 1] = ar[n - 1];
    for(let i = n - 2; i >= 0; i--) {
        // sets the min btw right & curElement
        minRight[i] = Math.min(minRight[i + 1], ar[i]);
    }

    let result = 0;
    for(let i = 0; i < n; i++) {
        // checks if left <= right then an insertion can be made therefore we increase result
        if(maxLeft[i] <= minRight[i + 1]) result++;
    }
    return result + 1;
}
maxChucnksToSorted([2,1,3,4,4]); //Output: 4



