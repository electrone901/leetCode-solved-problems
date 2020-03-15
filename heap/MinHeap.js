/*
Maximum Performance of a Team
There are n engineers numbered from 1 to n and two arrays: speed and efficiency, where speed[i] and efficiency[i] represent the speed and efficiency for the i-th engineer respectively. Return the maximum performance of a team composed of at most k engineers, since the answer can be a huge number, return this modulo 10^9 + 7.

The performance of a team is the sum of their engineers' speeds multiplied by the minimum efficiency among their engineers. 

 

Example 1:

Input: n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 2
Output: 60
Explanation: 
We have the maximum performance of the team by selecting engineer 2 (with speed=10 and efficiency=4) and engineer 5 (with speed=5 and efficiency=7). That is, performance = (10 + 5) * min(4, 7) = 60.
Example 2:

Input: n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 3
Output: 68
Explanation:
This is the same example as the first but k = 3. We can select engineer 1, engineer 2 and engineer 5 to get the maximum performance of the team. That is, performance = (2 + 10 + 5) * min(5, 4, 7) = 68.
Example 3:

Input: n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 4


PSEUDO CODE:

We have to use the most efficient engineer and remove the engineer with lower speed if our selection going beyond the given size of K.

Same ideal with 857. Minimum Cost to Hire K Workers.

Performance = sum(speed) * min(efficiency). Idea is simple: try every efficiency value from highest to lowest, keep adding speed to total speed, if size of engineers group exceeds K, lay off the engineer with lowest speed.

Sort efficiency with descending order. Because, afterwards, when we iterate whole engineers, every round, when calculating the current performance, minimum efficiency is the effiency of the new incoming engineer.
Maintain a pq to track of the minimum speed in the group. If size of group is == K, kick the engineer with minimum speed out (since efficiency is fixed by new coming engineer, the only thing matters now is sum of speed).
Calculate/Update performance.
*/
/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
var maxPerformance = function(n, speeds, efficiencies, k) {
  const workers = new Array(n);
  for (let i = 0; i < n; i++) {
    workers[i] = { speed: BigInt(speeds[i]), efficiency: efficiencies[i] };
  }
  workers.sort((a, b) => b.efficiency - a.efficiency);

  let totalSpeed = BigInt(0);
  let max = BigInt(0);
  const heap = new MinHeap();
  for (let worker of workers) {
    const { speed, efficiency } = worker;
    totalSpeed += speed;

    heap.push(worker);
    if (heap.size() > k) totalSpeed -= heap.pop().speed;
    const total = totalSpeed * BigInt(efficiency);
    if (total > max) max = total;
  }
  return max % BigInt(1000000007);
};

class MinHeap {
  constructor() {
    this.store = [];
  }

  size() {
    return this.store.length;
  }

  isEmpty() {
    return this.store.length === 0;
  }

  push(value) {
    this.store.push(value);
    this.heapifyUp(this.store.length - 1);
  }

  pop() {
    if (this.store.length < 2) return this.store.pop();
    const result = this.store[0];
    this.store[0] = this.store.pop();
    this.heapifyDown(0);
    return result;
  }

  heapifyDown(parent) {
    while (true) {
      let [child, child2] = [1, 2]
        .map(n => parent * 2 + n)
        .filter(n => n < this.store.length);
      if (this.shouldSwap(child2, child)) {
        child = child2;
      }
      if (this.shouldSwap(child, parent)) {
        [this.store[child], this.store[parent]] = [
          this.store[parent],
          this.store[child]
        ];
        parent = child;
      } else {
        return parent;
      }
    }
  }

  heapifyUp(child) {
    while (child) {
      const parent = Math.floor((child - 1) / 2);
      if (this.shouldSwap(child, parent)) {
        [this.store[child], this.store[parent]] = [
          this.store[parent],
          this.store[child]
        ];
        child = parent;
      } else {
        return child;
      }
    }
  }

  shouldSwap(child, parent) {
    return child && this.store[child].speed < this.store[parent].speed;
  }
}
