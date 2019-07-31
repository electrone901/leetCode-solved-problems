/*
1 Greedy - It's obvious that we should always process the task which has largest amount left.
2 Put tasks (only their counts are enough, we don't care they are 'A' or 'B') in a PriorityQueue in descending order.
3 Start to process tasks from front of the queue. If amount left > 0, put it into a coolDown HashMap
4 If there's task which cool-down expired, put it into the queue and wait to be processed. Repeat step 3, 4 till there is no task left.



["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.
*/

function leastInterval(tasks, n) {
        if (n == 0) return tasks.length;
        let taskToCount = new Set();

        for (let c in tasks) {
            taskToCount.set(c, taskToCount.getOrDefault(c, 0) + 1);
        }
        
        let queue = new PriorityQueue((i1, i2) => i2 - i1);
        for (let c of taskToCount.keySet()) queue.add(taskToCount.get(c));
        
        let coolDown = new Set();
        let currTime = 0;
        while (!queue.isEmpty() || !coolDown.isEmpty()) {
            if (coolDown.containsKey(currTime - n - 1)) {
                queue.offer(coolDown.remove(currTime - n - 1));
            }
            if (!queue.isEmpty()) {
                let left = queue.poll() - 1;
        	if (left != 0) coolDown.put(currTime, left);
            }
            currTime++;
        }
        
        return currTime;
    }
}