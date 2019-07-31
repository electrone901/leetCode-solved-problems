/*
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when n
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 
 "hello", needle = "ll"
    -
  
  IdxFind = 2
 */
var strStr = function(haystack, needle) {
    if(needle == "") return 0;
    
    // 1. initialized var i, j, k = 0
    let i = 0,
        j = 0,
        k = 0;
    
        // 2. loop through while i < haystack && haystack >= needle.length
    while(i < haystack.length && haystack.length -i >= needle.length) {
        k = i;
        
        // 3. loop through str while j < needle, if char[k] !== char[j] reset j = 0;  j++, k++
        while(j < needle.length) {
            if(haystack[k] !== needle[j]) {
                j = 0;
                break;
            }
            j++;
            k++;
        }
        
        if(j == needle.length) return i;
        else { i++; }
    }
    return -1;
};