/*
Contains Duplicate II
Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

Example 1:
Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:
Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:
Input: nums = [1,2,3,1,2,3], k = 2
Output: false


    PSEUDO CODE
    - have a dic Map that has = { ar[i]: i }
    - loop through the ar and check 
        - if(dic.has(ar[i]) &&  (i - dic.get(ar[i])) <= k) then return true
        - else dic.set(ar[i], i)
    - return false

*/
var containsNearbyDuplicate = function(ar, k) {
    let dic = new Map();

    for (let i = 0; i < ar.length; i++) {
        let current = ar[i];
        if (dic.has(current) && (i - dic.get(current)) <= k) {
            return true;
        } else {
            dic.set(current, i);
        }
    }
    return false;
}
containsNearbyDuplicate([1, 0, 1, 1], 1);