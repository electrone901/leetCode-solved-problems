/*
Implement pow(x, n), which calculates x raised to the power n (xn).

Example 1:
Input: 2.00000, 10
Output: 1024.00000

Example 2
Input: 2.10000, 3
Output: 9.26100

Example 3:
Input: 2.00000, -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
*/

var myPow = function(x, n) {
    // special case, x^0 = 1
    if(n == 0) return 1;
    
    // apply recursion & built up the solution
    let tmp = myPow(x, Math.floor(n/2));

    // case, n is even, then tmp =  tmp * tmp
    if(n%2 == 0) return tmp * tmp;
    
    else {
        
        // case, n is odd, then tmp = x * tmp * tmp
        if(n > 0) return x * tmp * tmp;

        // case, n is less than 0, then tmp = (tmp * tmp)/x
        else { return (tmp * tmp)/x }
    }
};
myPow(2.00000, 10)
