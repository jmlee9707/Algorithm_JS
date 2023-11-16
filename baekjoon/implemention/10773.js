// 🌱 풀이 날짜 : 231116
// 🔥 백준 10773 : 제로

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((a) => Number(a));
const N = input.shift();
let sum = 0;
const arr = [];

input.forEach((n) => {
  if (n !== 0) arr.push(n);
  else {
    arr.length !== 0 && arr.pop();
  }
});

for (let i of arr) {
  sum += Number(i);
}
console.log(sum);
