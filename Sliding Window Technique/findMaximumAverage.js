/*
Given an array consisting of n integers, find the contiguous subarray of given length k 
that has the maximum average value. And you need to output the maximum average value.

Solution: the problem falls into the first type of sliding window problems, since the 
length of the window is fixed. We find the first window with size k and maintain a variable
curSum which equals the sum of all the elements within the current window and a global
maxSum which is the maximum sum among all the windows we have examined. As we moving 
the window one step at a time from left to right, we subtract the leftmost element in 
the current window and add the next element of the array until we hit the end of the 
array. Finally, we return the maxSum / k which is the maximum average among all the 
windows of length k.
*/
function findMaxAverage(ar, target) {
    let sum = 0,
        max = -Infinity;

    // starts from 0 to t=3, we have our sum = -3 +3 + -2 = -2
    for (let i = 0; i < target; i++) sum += ar[i];

    for (let i = target; i < ar.length; i++) {
        max = Math.max(max, sum);
        sum -= ar[i - target];
        sum += ar[i];
    }
    return (max / target).toFixed(2);
}
findMaxAverage([-3, 3, -2, 1, 1, 1, 2], 3); //1.00