/*
You have the radius of a circle with the center in point (0,0).

Write a function that calculates the number of points in the circle where (x,y) - 
the cartesian coordinates of the points - are integers.

Example: for radius = 2 the result should be 13.

0 <= radius <= 1000
*/

function pointsNumber(r) {
    let point = 0
    for (let i = -r; i <= r; i++) {
        for (let j = -r; j <= r; j++) {
            if (i * i + j * j <= r * r) {
                point++
            }
        }
    }
    return point;
}