/*
Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
    ...
Example 1:

Input: 1
Output: "A"
Example 2:

Input: 28
Output: "AB"
*/
// Instead of 1 -> A, 26 -> Z, we can assume that 0 -> A, 25 -> Z, and then here comes the base 26 representation, it's similar when you convert a number from base 10 to base 2
var convertToTitle = function(n) {
  let res = "";
  while (n !== 0) {
    // calculate the char in base 26, n-1 cause we start at 0
    let char = (n - 1) % 26;
    // convert the numb to String ascii
    char = String.fromCharCode(char + 65);
    // recalculate number & append to the res
    n = Math.floor((n - 1) / 26);
    res = char + res;
    console.log("res", res);
  }
  return res;
};
convertToTitle("28"); //AB
