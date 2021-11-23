/*
Create a function that takes an argument n and sums even 
Fibonacci numbers up to n's index in the Fibonacci sequence.
*/

function sumFibs(n) {
    let [a, b] = [1, 1];
    let result = 0;

    while (n--) {
        if (a % 2 == 0) result += a;
        [a, b] = [b, a + b];
    }

    return result;
};