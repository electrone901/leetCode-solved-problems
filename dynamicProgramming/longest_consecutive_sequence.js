/*
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(n) complexity.

Example:

Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
*/
function longest_consecutive(ar) {
    if(ar.length === 0) return 0;

    let best = 0,
        set = new Set();
    
    // 1. remove dups
    for(let i of ar) {
        set.add(i);
    }

    // 2. loop through set, one direction only check if m exist & get best
    for(let i of set) {
        let m = i + 1;

        while(set.has(m)) {
            m++;
        }
        best = Math.max(best, m -i);
    }
    return best;
}




