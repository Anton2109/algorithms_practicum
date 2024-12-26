// Автор кода — Mikhail Pikalov
// Источник: https://www.codewars.com/kata/54cf7f926b85dcc4e2000d9d/solutions/javascript

function frequencies(input) {
  var frequesncies = input.split("").reduce((memo, s) => {
    memo[s] = (memo[s] || 0) + 1;
    return memo;
  }, {});
  return Object.keys(frequesncies).map((key) => [key, frequesncies[key]]);
}

function createTree(freqs) {
  freqs = freqs.map((item) => {
    return { type: "leaf", value: item[1], letter: item[0] };
  });

  while (freqs.length > 1) {
    freqs.sort((a, b) => {
      if (a.value < b.value) return 1;
      if (b.value < a.value) return -1;
      return 0;
    });

    var left = freqs[freqs.length - 1],
      right = freqs[freqs.length - 2];

    freqs = freqs.slice(0, freqs.length - 2);

    var node = {
      type: "node",
      value: left.value + right.value,

      left: left,
      right: right,
    };

    freqs.unshift(node);
  }

  return freqs[0];
}

function getLettersData(node, acc, prefix) {
  if (node.type == "node") {
    getLettersData(node.left, acc, prefix + "0");
    getLettersData(node.right, acc, prefix + "1");
  }

  if (node.type == "leaf") {
    acc[node.letter] = prefix;
  }

  return acc;
}

function encode(freqs, s) {
  if (freqs.length < 2) return null;

  var rootNode = createTree(freqs);
  var lettersData = getLettersData(rootNode, {}, "");

  var result = s
    .split("")
    .map((letter) => lettersData[letter])
    .join("");

  return { result: result, lettersData: lettersData };
}

var inputString = "Errare humanum est.";
var freqs = frequencies(inputString);
var encoded = encode(freqs, inputString);

console.log(freqs.length, encoded.result.length);

Object.keys(encoded.lettersData).forEach((letter) => {
  console.log(`'${letter}': ${encoded.lettersData[letter]}`);
});

console.log(encoded.result);
