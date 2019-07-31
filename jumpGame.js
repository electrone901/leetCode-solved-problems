/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.

             Solution 2 - Iterative Algorithm
1 - Notice we never progress backwards in the array, as jumps are only forward. Iterate left-to-right through the array.
2 - For each index i in the array, see what the maximum jump reach you have.
3 - As long as there are elements within reach that we haven't tried, keep going until you reach the end of the array. If we get to end, return true. If not, return false.

Time/Space Complexity
Time Complexity: O(n)
Space Complexity: O(1)
Due to our jump value being [0, jump], we can solve this in O(1) space. However, this O(1) space solution is not possible in all variations to this problem, such as this problem.
*/
function canJump(ar) {
    let reach = 0;

    for(let i =0; i <= reach; i++) {
        reach = Math.max(reach, i + ar[i]);
        if(reach >= ar.length-1) return true;
    }
    return false;
}

