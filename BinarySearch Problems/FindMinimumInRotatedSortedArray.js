/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you 
beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.
You may assume no duplicate exists in the array.

Example 1:
Input: [3,4,5,1,2] 
Output: 1

Example 2:
Input: [4,5,6,7,0,1,2]
Output: 0
*/

/*
The main idea for binary search is to:
    - find the range (l + h) /2
    - we want to be inclusive with high so if ar[m] < ar[h] then h = m
    - else l = m +1
    - at the end of the loop our target min is going to be ar[l] so return it 
Example 1:
Input: [3,4, 5, 1,2] 
 1      l    m     h     
 2           l  m  h     
 3           l  h 
             m
 4              h 
                l
   
so we return ar[l] Output: 1
*/

var findMin = function(ar) {
    let low = 0,
        high = ar.length-1;
    
    while(low < high) {
        let mid = Math.floor((low + high)/2);
        
        if(ar[mid] < ar[high]) {
            high = mid;
        }
        else {
            low = mid + 1;
        }
    }
    return ar[low];
}



var findMin = function(ar) {
    if(ar.length == 0) return 0;
    if(ar.length == 1) return ar[0];
    
    let low = 0;
    let high = ar.length-1;
    
    while(low < high) {
        let mid = Math.floor((low + high)/2);
        
        if(mid > 0 && ar[mid] < ar[mid-1]) {
            return ar[mid];
        }
        
        if(ar[low] <= ar[mid] && ar[mid] > ar[high]) {
            low = mid +1;
        }
        else {
            high = mid -1;
        }
    }
    return ar[low];
};




