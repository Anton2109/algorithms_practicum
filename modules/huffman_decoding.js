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

function decode(lettersData, bits) {
  var lettersByCodes = Object.keys(lettersData).reduce((memo, letter) => {
    memo[lettersData[letter]] = letter;
    return memo;
  }, {});

  var output = "";

  while (bits.length) {
    var code = Object.keys(lettersByCodes)
      .filter((code) => new RegExp("^" + code).test(bits))
      .reduce(
        (longestCode, code) => (code.length > longestCode ? code : longestCode),
        ""
      );

    output += lettersByCodes[code];
    bits = bits.replace(new RegExp("^" + code), "");
  }

  return output;
}

var uniqueSymbols = 12;
var bitLength = 60;
var lettersData = {
  " ": "1011",
  ".": "1110",
  D: "1000",
  c: "000",
  d: "001",
  e: "1001",
  i: "010",
  m: "1100",
  n: "1010",
  o: "1111",
  s: "011",
  u: "1101",
};
var encodedString =
  "100011110001001101000111111011001010011000010110011010111110";

var decodedString = decode(lettersData, encodedString);

console.log(decodedString);

export { decode };