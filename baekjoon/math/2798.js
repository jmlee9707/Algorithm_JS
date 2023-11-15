// 🌱 풀이 날짜 : 231115
// 🔥 백준 2798 : 블랙잭

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map((a) => Number(a));

const cards = input[1]
  .split(" ")
  .map((a) => Number(a))
  .sort((a, b) => a - b);

let max = 0;
for (let i = 0; i < n - 2; i++) {
  for (let j = i + 1; j < n - 1; j++) {
    for (let k = j + 1; k < n; k++) {
      const cnt = cards[i] + cards[j] + cards[k];
      max = cnt > max && cnt <= m ? cnt : max;
    }
  }
}

console.log(max);
