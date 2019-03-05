const n = parseInt(prompt('Enter Fibonacci number'));
if (Number.isNaN(n) || n <= 0) {
    alert('Input is not correct, refresh a page and enter a positive number');
} else {
    alert('Result of Loop Function: ' + fibLoop(n) + '\nResult of Recursive Function: ' + fibRec(n));
}

function fibLoop(n) {
    let first = 1, second = 1;
    for (let i = 3; i <= n; i++) {
        [first,second] = [second, first + second];
    }
    return second;
}

function fibRec(n) {
    let counter = 0;
    counter++;
    return n <= 2 ? 1 : fibRec(n - 1) + fibRec(n - 2);
}