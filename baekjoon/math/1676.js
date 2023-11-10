// 🌱 풀이 날짜 : 231110
// 🔥 백준 1676 : 팩토리얼 0의 개수

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const n = Number(input);
let cnt = 0;

// 5의 배수마다 0이 하나씩 늘어나고,
// 25의 배수마다 0이 하나 더 추가되며,
// 125의 배수마다 또 하나 더 추가되는 식

for (let i = 5; i <= n; i *= 5) {
  cnt += Math.floor(n / i);
}

console.log(cnt);
