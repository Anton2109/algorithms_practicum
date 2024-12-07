/* Предположительная сложность алгоритма - O(n), т.к. время выполнения растет линейно*/

function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }

  return b;
}

const startTime = performance.now();
const result = fib(32);
const endTime = performance.now();

const milSec = endTime - startTime;

console.log(`Число: ${result}`);
console.log(`Время выполнения: ${milSec} мс`);

/* fib(2)
Число: 1
Время выполнения: 0.03879999999999839 мс
*/

/* fib(5)
Число: 5
Время выполнения: 0.0365000000000002 мс
*/

/* fib(18)
Число: 2584
Время выполнения: 0.060300000000001575 мс
*/

/* fib(28)
Число: 317811
Время выполнения: 0.04820000000000135 мс
*/

/* fib(32)
Число: 2178309
Время выполнения: 0.04579999999999984 мс
*/
