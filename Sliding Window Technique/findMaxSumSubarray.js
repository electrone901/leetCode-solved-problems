/*
Find the max sum subarray of a fixed size K
    Example input:
    [4, 2, 1, 7, 8, 1, 2, 8, 1, 0]
*/
function findMaxSumSubarray(ar, target) {
    let max = -Infinity,
        sum = 0;

    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
        // will add 4 + 2 + 1 than will remove ar[0]
        if (i >= t - 1) {
            max = Math.max(max, sum);
            // removes far most left 2 - 2: remove ar[0]
            sum -= ar[i - t - 1];
        }
        return max;
    }
}
findMaxSumSubarray([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 3); //16