// Fibonacci Sequence

function fibonacciSeries(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        var fib = fibonacciSeries(n - 1);
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
        return fib;
    }
}

console.log(fibonacciSeries(8));
