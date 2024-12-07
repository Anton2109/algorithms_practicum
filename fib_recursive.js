function fib(n) {
  let a = 0;
  let b = 1;

  if (a === n) return true;
  if (a > n) return false;
  return isFibo(b, a + b, n);
}

const startTime = performance.now();
const result = fib(32);
const endTime = performance.now();

const milSec = endTime - startTime;

console.log(`Число: ${result}`);
console.log(`Время выполнения: ${milSec} мс`);
