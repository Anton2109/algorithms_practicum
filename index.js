import inquirer from "inquirer";

import { fib as fibArray } from "./modules/fib_array.js";
import { fib as fibEvenOrOdd } from "./modules/fib_big_even_odd.js";
import { fib as fibBinet } from "./modules/fib_binet.js";
import { fib as fibIterative } from "./modules/fib_loop.js";
import { fib as fibRecursive } from "./modules/fib_recursive.js";

const algorithms = [
  { name: "Массив", value: fibArray },
  { name: "Определение четности числа", value: fibEvenOrOdd },
  { name: "По формуле Бине", value: fibBinet },
  { name: "Итеративный алгоритм", value: fibIterative },
  { name: "Рекурсивный алгоритм", value: fibRecursive },
];

inquirer
  .prompt([
    {
      type: "list",
      name: "algorithm",
      message: "Выберите алгоритм",
      choices: algorithms,
    },
    {
      type: "input",
      name: "number",
      message: "Number:",
      validate: (input) => {
        if (isNaN(input)) return "Please enter a valid number.";
        return true;
      },
    },
  ])
  .then((answers) => {
    const startTime = performance.now();
    const result = answers.algorithm(parseInt(answers.number));
    const endTime = performance.now();
    const executionTime = endTime - startTime;

    console.log(
      `Алгоритм: ${algorithms.find((a) => a.value === answers.algorithm).name}`
    );
    console.log(`Число: ${answers.number}`);
    console.log(`Результат: ${result}`);
    console.log(`Время выполнения: ${executionTime.toFixed(7)} ms.`);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
