// 🌱 풀이 날짜 : 231110
// 🔥 백준 2577 : 숫자의 개수

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let res = 1;
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .forEach((n) => (res = res * parseInt(n)));

const arr = Array.from(String(res));
for (let i = 0; i <= 9; i++) {
  console.log(arr.filter((n) => n === String(i)).length);
}
