// 🌱 풀이 날짜 2023.11.14 (화)
// 🔥 백준 10798 : 세로 읽기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let max = 0;
input.forEach((str) => str.length > max && (max = str.length));
console.log(max);
let str = "";

for (let i = 0; i < max; i++) {
  for (let j = 0; j < 5; j++) {
    if (input[j].length >= i) str += input[j].charAt(i);
  }
}
console.log(str);
