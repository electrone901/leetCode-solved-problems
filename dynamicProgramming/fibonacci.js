/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each
number is the sum of the two preceding ones, starting from 0 and 1. That is,
F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), for N > 1.
Given N, calculate F(N).

Example 1:
Input: 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.


    ALGORITH:
    - WE CAN DO THIS PROBLEM IN 3 DIFFERENT WAYS:
            
        1- DYNAMIC PROGRAMMING: ITERATIVE  Runtime:O(n)  Space: O(n)

                - We use dynamic programming iterative bottom-up and we use the 2 previous 
                  elements to calculate the next and at the end we return the last
                - Define an ar = [];
                - if(n == 0) return 0
                - if(n == 1) return 1
                - ar[0] = 0, ar[1] =1
                - for(i=2; i <= N; i++) ar[i] = ar[i-2] + ar[i-1];
                - return ar[N]

        2- DYNAMIC PROGRAMMING: RECURSIVE  Runtime:O(n)  Space: O(n)
            - same idea as DYNAMIC PROGRAMMING: ITERATIVE but instead we do it recursively and we use top-bottom 
              approach. 


        3- INTERATIVE: NO ARRAY   Runtime:O(n)  Space: O(n)
            - set before_prev = 0, prev = 1, next;
            - loop through i = 2 to N and calculate & reassigned before_prev & prev:
                next = before_prev + prev;
                before_prev = prev;
                prev = next;
            - at the end of the loop return next;

*/
// DYNAMIC PROGRAMMING: ITERATIVE  Runtime:O(n)  Space: O(n)
var fibDyanicProgrammingIterative = function(N) {
    let ar = [0, 1];
    for(let i = 2; i <= N; i++) {
        ar[i] = ar[i-2] + ar[i-1];
    }
    return ar[N];
};


// DYNAMIC PROGRAMMING: RECURSIVE  Runtime:2^n  Space: O(n)
var fibDyanicProgrammingRecursive = function(N) {
    let ar = [];
    return helper(N, ar);
}
function helper(N, ar) {
    if(N <= 0) return 0;
    else if(N == 1) return 1;
    ar[N] = helper(N - 1, ar) + helper(N - 2, ar);
    return ar[N];
}


// INTERATIVE: NO ARRAY   Runtime:O(n)  Space: O(n)
var fib = function(N) {
    if(N <= 0) return 0;
    else if(N == 1) return 1;
    
    let before_prev = 0,
        prev = 1,
        next;
    
    for(let i = 2; i <= N; i++) {
        next = before_prev + prev;
        before_prev = prev;
        prev = next;
    }
    return next;
}
