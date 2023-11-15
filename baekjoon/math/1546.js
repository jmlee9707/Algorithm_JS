// 🌱 풀이 날짜 : 231115
// 🔥 백준 1546 : 평균

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input[0]);
const nums = input[1]
  .split(" ")
  .map((a) => Number(a))
  .sort((a, b) => a - b);
const N = nums[n - 1];
let res = 0;
nums.map((a) => (a / N) * 100).forEach((a) => (res += a));

console.log(parseFloat(res / n));
