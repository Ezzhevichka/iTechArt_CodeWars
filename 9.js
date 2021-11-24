/*
No Story

No Description

Only by Thinking and Testing

Look at the result of testcase, guess the code!
*/

function testIt(a, b) {
    return sum(a) * sum(b);
}
const sum = i => ('' + i).split('').reduce((k, j) => k + +j, 0)