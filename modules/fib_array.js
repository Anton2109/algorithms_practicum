/* Предположительная сложность алгоритма - O(n), т.к. время выполнения растет линейно*/

const fib = (n) => {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  let a = 0;
  let b = 1;
  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
    arr.push(b);
  }

  return arr;
};

export { fib }; 
