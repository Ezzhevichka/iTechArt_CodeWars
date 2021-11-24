// Find the sum of the digits of all the numbers from 1 to N (both ends included).

function twistedSum(n) {
    return [...Array(n + 1).keys()].reduce((i, j) => i + [..."" + j].reduce((a, b) => a + +b, 0), 0);
}