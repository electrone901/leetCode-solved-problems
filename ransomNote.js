/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
 
 */
var canConstruct = function(ransomNote, magazine) {
    let hash = {};
    for(let i =0; i < magazine.length; i++) {
        let cur = magazine[i];
        if(!hash[cur]) hash[cur] = 1;
        else {
            hash[cur]++;
        }
    }
   
    for(let i = 0; i < ransomNote.length; i++) {
        let cur = ransomNote[i];
        if(hash[cur]) {
            hash[cur]--;
        }
        else { return false };
    }
    return true;

};
// Time/Space Complexity
// Time Complexity: O(n + m) cause we go through n & m = magazines.length
// Space Complexity: O(m) to store magazine in a HashMap of characters
