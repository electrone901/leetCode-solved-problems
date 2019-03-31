/**
Write a function to find the longest common prefix string amongst an array of 
strings. If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow"]
Output: "fl"
Example 2:

Input: ["dog","racecar"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:All given inputs are in lowercase letters a-z.

    PSEUDO CODE:
        - check if ar = null || 0 return res
        - variables: 
            a = s[0]
            b = s[s.length-1]
            res = ""
        - sort s
        - loop through 'a' array 
            check if(a[i] === b[i]) res += a[i]
            else return res;
        return res;
 */

 var longestCommonPrefix = (strs) => {
     if(strs === null || strs.length === 0) return ""
     let res = "",
         a = strs[0],
         b = strs[strs.length-1];
     
    for(let i=0; i < a.length; i++) {
        if(a[i === b[i]]) {
            res += a[i];
        }
        else {
            return res;
        }
    }
    return res;
 }
 longestCommonPrefix(["flower","flow"]); // Output: "fl"