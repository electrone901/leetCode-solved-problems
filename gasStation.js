/*
There are N gas stations along a circular route, where the amount of gas at station i is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.

Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.

Note:

If there exists a solution, it is guaranteed to be unique.
Both input arrays are non-empty and have the same length.
Each element in the input arrays is a non-negative integer.
Example 1:

Input: 
gas  = [1,2,3,4,5]
cost = [3,4,5,1,2]

Output: 3

Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.
Example 2:

Input: 
gas  = [2,3,4]
cost = [3,4,3]

Output: -1

Explanation:
You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 3 + 2 = 3
Travel to station 1. Your tank = 3 - 3 + 3 = 3
You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
Therefore, you can't travel around the circuit once no matter where you start.

PSEUDOCODE:
    The algorithm is pretty easy to understand. Imagine we take a tour around this circle, the only condition that we can complete this trip is to have more fuel provided than costed in total. That's what the first loop does.

If we do have more fuel provided than costed, that means we can always find a start point around this circle that we could complete the journey with an empty tank. Hence, we check from the beginning of the array, if we can gain more fuel at the current station, we will maintain the start point, else, which means we will burn out of oil before reaching to the next station, we will start over at the next station.
*/

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 
gas  = [1,2,3,4,5]
        - -
cost = [3,4,5,1,2]

 */
// var canCompleteCircuit = function(gas, cost) {
//   let leftGas = 0,
//       start = 0;
    
//     for(let i = 0; i < 2* gas.length; i++) {
//         leftGas += gas[i % gas.length] - cost[i % gas.length];
//         console.log("gas[i % gas.length]= ", gas[i % gas.length], "cost[i % gas.length]", cost[i % gas.length], "leftGas", leftGas)
//         if(leftGas < 0) {
//             leftGas = 0;
//             start = i +1;
//         }
//     }
    
//     if(start >= gas.length) return -1;
//     else { return start }
// };

var canCompleteCircuit = function(gas, cost)  {
    let tank = 0;
    
    // check if overall tank > 0 if it is that means at least one idx meets the condition
    for(let i =0; i < gas.length; i++) {
        tank += gas[i] - cost[i];
    }
    if(tank < 0) return -1;
    
    let start = 0,
        acummulate = 0;
    
    for(let i=0; i < gas.length; i++) {
        let curGain = gas[i] - cost[i];
        
        // if acummulate + curGain < 0 that means we cannot move to the next gas station so we start in the next index
        if(acummulate + curGain < 0) {
            start = i + 1;
            acummulate = 0;
        }
        else {
            acummulate += curGain;
        }
    }
    return start;
}


