/*
3Sum

Given an array nums of n integers, are there elements a, b, c in nums such that
 a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:The solution set must not contain duplicate triplets.

Example:
Given array nums = [-1, 0, 1, 2, -1, -4],
A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

    PSEUDO CODE:
        - check if ar.length < 3 return []
        - ar.sort()
        - initialize var:
            result = []
        
        - for(0 - n-2) {
            if(ar[i] === ar[i+1]) //skips duplicate values
            
            let j = i +1
            let k = ar.lenght -1

            while(j < k) {
                if(ar[i] + ar[j] + ar[k] === 0) {
                    result.push([ar[i], ar[j], ar[k]]);
                    // skips duplicate values
                    while(j < k && ar[j] === ar[j+1]) j++;
                    while(j < k && ar[k] === ar[k-1]) k--;
                }
                else if(ar[i] + ar[j] + ar[k] > 0) {
                    k--;
                }
                else {
                    j++;
                }
            }
          }
        - return result;
*/
function threeSum(ar) {
    if(ar.length < 3 || ar === null) return [];
    
    ar = ar.sort((a,b) => a-b);
    const result = [];

    for(let i = 0; i < ar.length-2; i++) {
        if(ar[i] === ar[i+1]) continue;
        
        let j = i+1;
        let k = ar.length-1;

        while(j < k) {
            if(ar[i] + ar[j] + ar[k] === 0) {
                result.push([ar[i], ar[j], ar[k]]);

                // skip duplicate values check if the next is equal the current then move on to the next one
                while(j < k && ar[j] === ar[j+1]) j++;
                while(j < k && ar[k] === ar[k-1]) k--;
                j++;
                k--;
            }
            else if(ar[i] + ar[j] + ar[k] > 0) {
                k--;
            }
            else {
                j++;
            }
        }
    }
    return result;
}
threeSum([-1, 0, 1, 2, -1, -4]);
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]
