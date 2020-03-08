/*
There is a room with n bulbs, numbered from 1 to n, arranged in a row from left to right. Initially, all the bulbs are turned off.

At moment k (for k from 0 to n - 1), we turn on the light[k] bulb. A bulb change color to blue only if it is on and all the previous bulbs (to the left) are turned on too.

Return the number of moments in which all turned on bulbs are blue.

 

Example 1:



Input: light = [2,1,3,5,4]
Output: 3
Explanation: All bulbs turned on, are blue at the moment 1, 2 and 4.




PSEUDO CODE:
To solve this problem, we need to find a way to track all the previous(left) bulbs whether being turned on or not.

One trick I came up with is that we can use a sorted array to track the bulbs' status. We can imagine that if a light is turned on then we add the light number to a sum, that is, if the sum of the current sorted array is equal to the light array, that means all the left bulbs are turned on.

For example, given the lights array: [2, 1], the sorted array should be [1, 2]. When all the previous(left) bulb are turned on, the sum should be equal, which is 3. And there is 1 time those 2 sum values are equal, so the answer is 1.

The number of blue bulb = How many times do the light array and sorted array have the same sum.

By knowing this, the solution of this problem will be extremly easy and clean. Here is my code:
*/
<img
  alt=""
  src="https://assets.leetcode.com/uploads/2020/02/29/sample_2_1725.png"
  style="width: 575px; height: 300px;"
></img>;

function numTimesAllBlue(light) {
  if (light.length === 1) return 1;
  let res = 0,
    sum1 = 0,
    sum2 = 0,
    temp = light.slice(0);
  temp.sort(a, b => a - b);

  for (let i = 0; i < temp.length; i++) {
    sum1 += temp[i];
    sum2 += light[i];
    if (sum1 === sum2) res++;
  }
  return res;
}
numTimesAllBlue([3, 2, 4, 1, 5]); //=> 2
/*
light = [3, 2, 4, 1, 5]
temp =  [1, 2, 3, 4, 5]
num passes
sum1 =1  sum2 =3  res=0  
sum1 =3  sum2 =5  
sum1 =6  sum2 =9  
sum1 =10  sum2 =10 res=1  
sum1 =15  sum2 =15 res=2 

*/
numTimesAllBlue([4, 1, 2, 3]); //=> 1
