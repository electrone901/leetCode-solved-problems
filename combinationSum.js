/*
39. Combination Sum

Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), 
find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.

Example 1:

Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]

Example 2:

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]



res = []
- ar.sort
- p = []
- dfs(ar, t, p, 0)


I - [2, 2] 4

O [[2, 2]]

*/


const ar = [2, 3, 5],
    target = 8;

function find(ar, t) {
    let res = [];
    ar = ar.sort((a, b) => a - b);


    let dfs = function(t, p, i) {

        if (t === 0) {
            if (ar[i] !== ar[i - 1]) {
                res.push(p);
            }
        }

        if (t < 0) return;

        else {
            while (i < ar.length && t - ar[i] >= 0) {
                dfs(t - ar[i], [...p, ar[i]], i);
                i++;
            }
        }
    }

    dfs(t, [], 0);

    return res;
}

console.log(find(ar, target));