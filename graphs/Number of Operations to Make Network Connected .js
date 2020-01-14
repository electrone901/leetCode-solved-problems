/*
There are n computers numbered from 0 to n-1 connected by ethernet cables connections forming a network where connections[i] = [a, b] represents a connection between computers a and b. Any computer can reach any other computer directly or indirectly through the network.

Given an initial computer network connections. You can extract certain cables between two directly connected computers, and place them between any pair of disconnected computers to make them directly connected. Return the minimum number of times you need to do this in order to make all the computers connected. If it's not possible, return -1. 

 

Example 1:



Input: n = 4, connections = [[0,1],[0,2],[1,2]]
Output: 1
Explanation: Remove cable between computer 1 and 2 and place between computers 1 and 3.

*/


function findParent(parent, i) {
    while(i != parent[i]) i = parent[i];
    return i;
}
var makeConnected = function(n, connections) {

    // populate arrParent 
    let parent = new Array(n).fill(0);
    for(let i = 0; i < n; i++){
        parent[i] = i;
    }
    
    let m = connections.length,
        extraEdges = 0,
        components = 0;
    
    // find the parent of node
    for(let i = 0; i < m; i++){
        let p1 = findParent(parent, connections[i][0]);
        let p2 = findParent(parent, connections[i][1]);
        
        // find extra edges
        if(p1 == p2) extraEdges++;
        else { parent[p1] = p2; }
    }
    
    // find components
    for(let i = 0; i < n; i++) {
        if(parent[i] == i) components++;
    }
    
    return  (extraEdges >= components -1) ? components -1: -1;
};
