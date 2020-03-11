/*
Given the string s, return the size of the longest substring containing each vowel an even number of times. That is, 'a', 'e', 'i', 'o', and 'u' must appear an even number of times.

 

Example 1:

Input: s = "eleetminicoworoep"
Output: 13
Explanation: The longest substring is "leetminicowor" which contains two each of the vowels: e, i and o and zero of the vowels: a and u.

BACKGROUND INFO:
 Bitwise XOR	a ^ b	Returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s.
 
 Left shift	a << b	Shifts a in binary representation b (< 32) bits to the left, shifting in 0s from the right.
 
Sign-propagating right shift	a >> b	Shifts a in binary representation b (< 32) bits to the right, discarding bits shifted off.
*/
var findTheLongestSubstring = function(s) {
  let seen = {}; //seen= {bitmask:ind at which occurs}
  let cur = 0,
    res = 0;

  // basecase
  seen[0] = -1; //if come across 0 I will need ti consider that length

  for (let i = 0; i < s.length; i++) {
    cur ^= (1 << ("aeiou".indexOf(s[i]) + 1)) >> 1;
    // for "aeiou", 1 << "aeiou".indexOf(s.charAt(i)) is enough,but for all other chars, "aeiou".indexOf(s.charAt(i)) will return -1, that's why we need 1 << ("aeiou".indexOf(s.charAt(i)) + 1 ) >> 1.
    if (seen[cur] === undefined) seen[cur] = i;
    //the length of the string, between the first index at which my cur occured and the last needs to be considered as a result, because that means that the inbetween string has a XOR of 0 which makes it of the required type
    res = Math.max(res, i - seen[cur]);
  }
  return res;
};
