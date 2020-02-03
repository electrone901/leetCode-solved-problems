/*
Given an array arr.  You can choose a set of integers and remove all the occurrences of these integers in the array.

Return the minimum size of the set so that at least half of the integers of the array are removed.


Example 1:
Input: arr = [3,3,3,3,5,5,5,2,2,7]
Output: 2
Explanation: Choosing {3,7} will make the new array [5,5,5,2,2] which has size 5 (i.e equal to half of the size of the old array).
Possible sets of size 2 are {3,5},{3,2},{5,2}.
Choosing set {2,7} is not possible as it will make the new array [3,3,3,3,5,5,5] which has size greater than half of the size of the old array.

Example 2:
Input: arr = [7,7,7,7,7,7]
Output: 1
Explanation: The only possible set you can choose is {7}. This will make the new array empty.

Example 3:
Input: arr = [1,9]
Output: 1

Example 4:
Input: arr = [1000,1000,3,7]
Output: 1

Example 5:
Input: arr = [1,2,3,4,5,6,7,8,9,10]
Output: 5

PSEUDOCODE:
1. sort the array
2. get frequency count at the end make sure to push last element frequency
3. sort frequency in descending orden
4. loop until elementToRemove < arr.length/2 & return result

Time: n log n
space: n 
*/

const minSetSize = (arr) => {   
    if(arr.length == 0) return 0;
    
	/* sort the array */
    arr.sort((a,b) => a-b);
    
	/* get frequency count at the end make sure to push last element frequency*/
    let frequency = [];
    let count = 1;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] === arr[i-1]) count++
        else {
            frequency.push(count);
            count = 1;
        }
    }
    frequency.push(count);
    
    
    /*  sort frequency in descending orden*/
    frequency.sort((a,b) => b-a);
    

    /*  loop until elementToRemove < arr.length/2*/
    let result = 0;
    let elementToRemove = 0;
    let len = arr.length/2;
    while(elementToRemove < len) {
        elementToRemove += frequency[result];
        result++;
    }
    return result;
}