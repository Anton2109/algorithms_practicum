function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }

  let getLastNumber = b % 10;

  if(getLastNumber % 2 === 0) {
    return console.log('even')
  } else {
    console.log('odd')
  };

}

const result = fib(841645);