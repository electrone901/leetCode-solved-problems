/*
Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring without repeating characters.

Example 1:
Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3.

ALGORITHM:
the basic idea is, keep a hashmap which stores the characters in string as keys and their 
positions as values, and keep two pointers which define the max substring. move the right 
pointer to scan through the string , and meanwhile update the hashmap. If the character 
is already in the hashmap, then move the left pointer to the right of the same character 
last found. Note that the two pointers can only move forward.
*/

function lengthOfLongestSubstring(str) {
    let max = -Infinity,
        hash = {},
        j = 0;

    for (let i = 0; i < str.length; i++) {
        let cur = str[i];

        if (hash[cur]) {
            j = Math.max(j, hash[cur] + 1);
        }

        map.put(s.charAt(i), i);
        max = Math.max(max, i - j + 1);
    }
    return max;
}
lengthOfLongestSubstring("abcabcbb"); //=> 3