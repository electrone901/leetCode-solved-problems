/** 
 * Given an Integer Array, find the maximum size of subarray whose sum equals to K.
For example, Given [1,2,-3,3,-1,2,4] and K=3, the subarray [1,2,-3,3] sum equals to 3.
*/

function maximumSubArraySumEqualsK(arr, k) {
    let hash = {}, max = 0, sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
        let difference  = sum - k;
        if(hash[difference]){
            max = Math.max(max, i - hash[difference]);
        }
        hash[sum] = i;
    }
    return max;
}
