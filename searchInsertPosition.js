/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
gettign ar return currect target idx
Input: [1,3,5,6], 5
Output: 2

let i = 0;
loop throuhg the ar 
    if(target == ar[i]) return i
    if(target < ar[i]) return i
return i + 1

Input: [1,3,5,6], 2
Output: 1



Input: [1,3,5,6], 7
Output: 4
Example 4:

Input: [1,3,5,6], 0
Output: 0
 
    TIME COMPLEXITY EXPLAIN IT IN ORDER 
        Common time complexities with simple definitions:
         
        - O(1) Constant Time: Given an input of size n, it only takes a single step for the algorithm to 
        accomplish the task.
        
        - O(log n) — Logarithmic time: given an input of size n, the number of steps it takes to accomplish 
        the task are decreased by some factor with each step. An example will be binary search
        
        - O(n) — Linear Time: Given an input of size n, the number of of steps required is directly related (1 to 1)
        
        - O(n²) — Quadratic Time: Given an input of size n, the number of steps it takes to accomplish a 
        task is square of n.
        
        - O(C^n) — Exponential Time: Given an input of size n, the number of steps it takes to accomplish a task
         is a constant to the n power (pretty large number).
         
        
        Ex: With this knowledge in hand, lets see the number of steps that each of these time complexities entails:
        let n = 16;

        O (1) = 1 step "(awesome!)"

        O (log n) = 4 steps  "(awesome!)" -- assumed base 2

        O (n) = 16 steps "(pretty good!)"

        O(n^2) = 256 steps "(uhh..we can work with this?)"

        O(2^n) = 65,536 steps "(...)"
 */
var searchInsert = function(ar, target) {
    let i = 0;
    while(i < ar.length) {
        if(target == ar[i]) return i;
        if(target < ar[i]) return i;
        i++;
    }
    return i + 1;
};
// Time complexity =  0(n)
// Space complexity =  0(1)


// But we can do better
var searchInsert = function(ar, target) {
    let low = 0;
    let high = ar.length-1;
    
    while (low <= high) {
        // low = how many steps we increase
        // calculates mid
        let mid = low + Math.floor((high - low) / 2);
        if (ar[mid] < target) low = mid + 1;
        else if (ar[mid] > target) high = mid-1;
        else {
            return mid
        }
    }
    return low;
}
// Time complexity =  0(log(n))
// Space complexity =  0(1)