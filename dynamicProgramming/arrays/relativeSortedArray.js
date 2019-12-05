/*
 Relative Sort Array
Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

Example 1:
Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]

    ALGORITHM:
1. Build a frequency hash for ar1
2. Loop through ar2 & for every ele 
    2.1. Loop up to the value of hash[s[ele]] & push(ele)
3. To get the reminder loop through ar1 and filter ar.indexOf(ele) == -1 return an array
4. Sort reminder array
5. result.concat(reminder)
6. Return result

TIME COMPLEXITY:
    for within a for: i * j
    filter & indexOf(ele): i * j

SPACE COMPLEXITY:
    0(n) at worse
*/
var relativeSortArray = function(ar1, ar2) {
    let hash = {},
        res = [];
    
    for(let ele of ar1) {
        hash[ele] ? hash[ele]++: hash[ele]=1;
    }
    
    for(let i = 0; i < ar2.length; i++) {
        let cur = ar2[i];
        for(let j = 0; j < hash[cur]; j++) {
            res.push(cur);
        }
    }
    
    let reminder = ar1.filter((ele) => ar2.indexOf(ele) == -1).sort((a,b) => a-b);
    
    res = res.concat(reminder);
    console.log("reminder", reminder, "?", res == [2,2,2,1,4,3,3,9,6,7,19])
    console.log("res", res)
};
let ar1 = [2,3,1,3,2,4,6,7,9,2,19];
let ar2 = [2,1,4,3,9,6];
console.log(relativeSortArray(ar1, ar2));
