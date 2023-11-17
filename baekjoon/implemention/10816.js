// 🌱 풀이 날짜 : 231117
// 🔥 백준 10816 : 숫자 카드 2

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const sang = new Map();
const arr = input[1].split(" ").forEach((n) => {
  if (sang.has(n)) sang.set(n, sang.get(n) + 1);
  else sang.set(n, 1);
});

const res = [];
input[3].split(" ").forEach((n) => {
  sang.has(n) ? res.push(sang.get(n)) : res.push("0");
});

console.log(res.join(" "));
