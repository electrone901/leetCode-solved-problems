/*
Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.

Example 1:

Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75


Note:

1 <= k <= n <= 30,000.
Elements of the given array will be in the range [-10,000, 10,000].

APPROACH:
- The approach will be to think about k  elements  at the time then get their sum. This sum  will be the base to compute other sums.
- To calculate the next sums we can pick the next element and drop the very first element so that we only consider 4 elements at the time
- Check max if temp > max then reassigned
-At the return max/k

PSUDO CODE:
 1. Get sum for k elements
 2. Save sum to max
 3. Loop through the array starting from k to the end
        sum = sum + arr[i] - ar[i-k]
        max = Math.max(max, sum)
4.  Return max/k
*/

function findMaxAverage(arr, k) {
  let sum = 0,
    max;

  // 1.Get sum for first 4 & assigned to max
  for (let i = 0; i < k; i++) {
    sum += arr[i]
  }
  max = sum

  // 2.Loop from k up to end to compute sum & max
  for (let j = k; k < arr.length; j++) {
    sum += ar[i] - ar[i - k]
    max = Math.max(sum, max)
  }

  // 3.Return the average
  return max / k
}


