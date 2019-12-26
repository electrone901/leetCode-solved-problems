/*
Root of Number

Many times, we need to re-implement basic functions without using any standard library functions already implemented. 
For example, when designing a chip that requires very little memory space.

In this question we’ll implement a function root that calculates the n’th root of a number.
The function takes a nonnegative number x and a positive integer n, and returns the positive n’th 
root of x within an error of 0.001 (i.e. suppose the real root is y, then the error is: |y-root(x,n)| 
and must satisfy |y-root(x,n)| < 0.001).

Don’t be intimidated by the question. While there are many algorithms to calculate roots that
require prior knowledge in numerical analysis (some of them are mentioned here), there is also an elementary method which doesn’t require 
more than guessing-and-checking. Try to think more in terms of the latter.

Make sure your algorithm is efficient, and analyze its time and space complexities.

Examples:
input:  x = 7, n = 3
output: 1.913

input:  x = 9, n = 2
output: 3

        ALGORITHM:
         - Since we need to check for the margin of error  < 0.001 we can use 
           l = 0
           h = x
           mid = (h+l)/2
           then we can use binary search to look for the mid < 0.001 so we can say 
           while(mid >= 0.001) {
               keep checking 
               if(pow(mid, n) > x) h = m;
               else if (pow(mid, n) < x) l = m;
               else (break)
               mid = (h+l)/2 
           }
        - eventually the mid is going to have the right answer so 
        return mid


TIME COMPLEXITY: notice the iteration is done in O(1) is O(1)

SPACE COMPLEXITY: O(1)
*/

function root(x, n) {
    let l = 0,
        h = Math.max(1, x),
        approxRoot = (h + l)/2;
    
    while(approxRoot >= 0.001) {
      console.log("approxRoot", approxRoot)
      if(Math.pow(approxRoot, n) > x){
        h = approxRoot;
        console.log('p', Math.pow(approxRoot, n), 'n',n, 'h',h)
      }
      else if(Math.pow(approxRoot, n) < x) {
        l = approxRoot;
      }
      else break;
      approxRoot = (h + l)/2;
    }
    return approxRoot;
  
  }
  console.log(root(9, 2)); //3