/* Предположительная сложность алгоритма - O(n), т.к. время выполнения растет линейно*/

function fib(n) {
  if(n === 0) return 0;
  if(n === 1) return 1;

  return fib(n - 1) + fib (n - 2);
}

const startTime = performance.now();
const result = fib(24);
const endTime = performance.now();

const milSec = endTime - startTime;

console.log(`Число: ${result}`);
console.log(`Время выполнения: ${milSec} мс`);

/* fib(6)
Число: 8
Время выполнения: 0.01699999999999946 мс
*/

/* fib(8)
Число: 21
Время выполнения: 0.01759999999999806 мс
*/

/* fib(10)
Число: 55
Время выполнения: 0.028299999999997993 мс
*/

/* fib(17)
Число: 1597
Время выполнения: 0.391099999999998 мс
*/

/* fib(24)
Число: 46368
Время выполнения: 1.8379999999999974 мс
*/