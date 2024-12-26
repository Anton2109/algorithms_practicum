function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }

  let getLastNumber = b % 10;
  return getLastNumber % 2 === 0 ? "even" : "odd";
}

export { fib }; 
