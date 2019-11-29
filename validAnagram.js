/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

*/
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let hash = {};
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        hash[char] ? hash[char]++ : hash[char] = 1;
    }

    for (let i = 0; i < t.length; i++) {
        let char = t[i];
        if (!hash[char] || hash[char] === 0) {
            return false;
        } else {
            hash[char]--;
        }
    }

    return Object.values(hash).every(val => val === 0);
};

console.log(validAnagram("anagram", "nagaram"));