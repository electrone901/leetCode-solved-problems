
function queenAttackII(matrix) {
    let rows = matrix[0];
    let countObstacle = matrix[1];
    let distance = [];
        distance[0] = 0;
        distance[2] = qx;
        distance[4] = rows + 1 - qx;
        distance[6] = rows + 1 - qy;

        distance[1] = Math.min(distance[0], distance[2]);
        distance[3] = Math.min(distance[4], distance[2]);
        distance[5] = Math.min(distance[4], distance[6]);
        distance[7] = Math.min(distance[0], distance[6]);

    for(let i =0; i < countObstacle; i++) {
        let obstacle = somethingHere;
        let dx = obstacle[0] - queeu

    }


}