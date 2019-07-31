/*
Given a non-negative integer N, find the largest number that is less than or equal to N with monotone 
increasing digits.

(Recall that an integer has monotone increasing digits if and only if each pair of adjacent digits x and y 
satisfy x <= y.)

Example 1:
Input: N = 10
Output: 9
Example 2:
Input: N = 1234
Output: 1234
Example 3:
Input: N = 332
Output: 299
Note: N is an integer in the range [0, 10^9].
*/

/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(ar) {
  //1. Convert the given integer to an array
  ar = ar.toString(); 
  ar = ar.split(""); 

  //2. Create a integer mark variable
  let left;

  //start from i = ar.length-1 to start, if ar[i] < ar[i-1] means is out order  therefore left = i-1, and ar[i-1]--
  //3. Iterate from the end of the array to the beginning of the array.
  for(let i = ar.length-1; i > 0; i--) {
    if(ar[i] < ar[i-1]) {
      left = i - 1;
      ar[i-1]--;
    }
  }

  //4. Set all digits after mark to 9 as we want the highest number.
  //In step 3 we made sure that all digits before left are in increasing order
  for(let i = left + 1; i < ar.length; i++) {
    ar[i] = '9';
  }

  // remove leading 0
  let c = 0;
  while(c < ar.length && ar[c] == '0') c++;
  ar.splice(0,c);

  //if empty string return 0 otherwise return joined ar
  return ar === "" ? 0: ar.join('');
};