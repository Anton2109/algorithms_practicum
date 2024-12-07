const fib = (n) => {
    let a = (((1 + Math.sqrt(5)) / 2)**n - ((1 - Math.sqrt(5)) / 2)**n) / Math.sqrt(5);
    return Math.round(a);
}

const result = fib(32);

console.log(`Реузльтат: ${result}`);