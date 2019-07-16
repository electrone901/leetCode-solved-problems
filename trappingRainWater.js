/*
Trapping Rain Water
Given n non-negative integers representing an elevation map where the width of 
each bar is 1, compute how much water it is able to trap after raining.


The above elevation map is represented by array:
    [0,1,0,2,1,0,1,3,2,1,2,1]. 

In this case, 6 units of rain water (blue section) are being trapped. 
Example:
Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

    PSEUDO CODE:
        - initialize: 
            leftMax = -1
            rightMax = -1
            left = 0
            right = ar.length-1
            result = 0
        - loop through
            while(left <= right) 
                get leftMax = ar[left] > leftMax ? ar[left]: leftMax
                get rightMax = ar[right] > rightMax ? ar[right]: rightMax

                Now that you have  leftMax & rightMax get the min of them
                & add it to result += max - ar[maxSide] and decrease/increase 
                if(leftMax > rightMax) {
                    result += rightMax - ar[right];
                    right--
                } 
                else {
                    result += leftMax - ar[left]
                    left++;
                }
        return result

*/
var trappingRainWater = function(height) {
    let leftMax = -1,
        rightMax = -1,
        left = 0,
        right = height.length-1;
        result = 0;
    while(left <= right) {
        leftMax = height[left] > leftMax ? height[left]:leftMax;
        rightMax = height[right] > rightMax ? height[right]:rightMax;
        if(leftMax > rightMax) {
            result += rightMax - height[right];
            right--;
        }
        else {
            result += leftMax - height[left];
            left++;
        }
    }
    return result;
}
