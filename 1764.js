const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

/*
 * 백준 1764 듣보잡
 */

const N = Number(input[0].split(" ")[0]);
const M = Number(input[0].split(" ")[1]);

let notHear = new Set();
let result = [];

for (let i = 1; i <= N; i++) {
  notHear.add(input[i]);
}

for (let i = N + 1; i <= N + M; i++) {
  if (notHear.has(input[i])) {
    result.push(input[i]);
  }
}

console.log(result.length);
result.sort();
result.forEach((res) => console.log(res));
