/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 
 We want to return either [-1, -1] if target doesn't appear, or [start, end] if it is present.

Manipulating our binary search algorithm, we will search until target is found (== nums[mid]). When this happens, we will loop down until nums[start] doesn't equal target and up until nums[end] doesn't equal target to find the range where our value appears. Return [start, end]

If the target is never found, return [-1,-1].
 */
var searchRange = function(ar, t) {
    if(ar.length == 0) return [-1,-1]; //base case
    else if (ar[0] == t && ar[ar.length-1] == t) {
        //entire range is target
        return [0, ar.length-1];
    }
    else {
        let low = 0,
            high = ar.length-1; 
        
            while (low <= high) {
                let mid = Math.floor((high+low)/2);
                if (t == ar[mid]) { //target is found
                    let start = mid,
                        end = mid;
                    
                    while(start > 0 && ar[start-1] == t) { 
                        //loop down to find start
                        start--;
                    }
                    while(end < ar.length-1 && ar[end+1] == t) {                             //loop up
                        end++;
                    }
                    return [start, end];
                }
                else if (t < ar[mid]) high = mid-1;
                else low = mid+1;
            }
    }
    return [-1, -1];
}
searchRange([5,7,7,8,8,10], 8);//[3,4]
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]    

