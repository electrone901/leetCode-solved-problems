/*
Maximum Average Subarray I
Given an array consisting of n integers, find the contiguous subarray of given length k 
that has the maximum average value. And you need to output the maximum average value.

Example 1:
Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75


    ALGORITHM:
1. Loop up to the target & get the max
2. Loop up to the ar.length and:
    2.1 add current ele to sum 
    2.2 substract first ele in window from sum & increase first ele++
    2.3 calculate max 
3. return max/target

TIME COMPLEXITY: 
    0(n)

*/

function maximumAverage(ar, target) {
    if(ar.length == 0 || ar.length < target) return 0;
  
    let sum = 0,
        max = 0,
        remove = 0;
    
    for(let i = 0; i < target; i++) {
      sum += ar[i];
      max = sum;
    }
  
    for(let j = target; j < ar.length; j++) {
      sum += ar[j];
      sum -= ar[remove++];
      max = Math.max(max, sum);
    }
  
  
    return max/target;
  }
  maximumAverage([1,12,-5,-6,50,3], 4); //12.75