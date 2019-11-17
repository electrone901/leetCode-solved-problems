/*
Find the Difference

Given two strings s and t which consist of only lowercase letters.

String t is generated by random shuffling string s and then add one more letter at a random position.

Find the letter that was added in t.

Example:

Input:
s = "abcd"
t = "abcde"

Output:
e

Explanation:
'e' is the letter that was added.

    PSEUDO CODE
    - The idea is to loop s first since it's the smallest and get the frequency into a  
        dic = new Map() 
        if cur doesn't exist add it 
        else cur++
    - loop t 
        if !dic.has(cur) || ( dic.has(cur) && dic.get(cur) === 0) that means we found an extra letter so return cur;
        else {
            dic.set(cur, dic.get(cur) - 1)
        }
*/

var findTheDifference = function(s, t) {
    let dic = new Map();

    for (let i = 0; i < s.length; i++) {
        let cur = s[i];
        if (dic.has(cur)) {
            dic.set(cur, dic.get(cur) + 1);
        } else {
            dic.set(cur, 1);
        }
    }

    for (let j = 0; j < t.length; j++) {
        let cur = t[j];

        if (!dic.has(cur) || (dic.has(cur) && dic.get(cur) === 0)) {
            return cur;
        } else {
            dic.set(cur, dic.get(cur) - 1);
        }
    }
    return "Bad input!"
}
console.log(findTheDifference("abcd", "abcde")); // => e