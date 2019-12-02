/*
findSmallestSubstring from a string that contains all letter of the target

*/
function findSmallestSubstring(str, target) {
    let min = '',
        left = 0,
        right = -1,
        hash = {};

    for (let ele of target) {
        hash[ele] ? hash[ele]++ : hash[ele] = 1;
    }

    let count = Object.keys(hash).length;

    while (right <= str.length) {
        // count is 0 means we found all chars of target now we can compress the size window to find the min length
        if (count == 0) {
            let cl = str[left];
            // we need to increase count because the cur exist in hash and we're going to take out from the string so increase the hash
            if (hash[cl] != null) hash[cl]++;
            if (hash[cl] > 0) count++;
            let temp = str.substring(left, right + 1);
            if (min == " ") min = temp;
            else min = min.length < temp.length ? min : temp;
            left++;
        }
        // count is not 0 that means we haven't found all chars on targ so keep moving rigth. right = -1 so we check every char
        else {
            right++;
            let cr = str[right];
            if (hash[cr] != null) hash[cr]--;
            if (hash[cr] == 0) count--;
        }
    }
    return min;
}
findSmallestSubstring("YEES_EYS", "SEY"); //"EYS"