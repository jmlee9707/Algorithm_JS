// 🌱 풀이 날짜 : 2023. 11. 08 (수)

// 새싹 입력과 계산
// 🔥 백준 1000 : A+B
// 🔥 백준 1001 : A-B
// 🔥 백준 10998 : A*B
// 🔥 백준 10869 : 사칙연산
// 🔥 백준 1008 : A/B
// 🔥 백준 11382 : 꼬마정민

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const a = input[0].split(" ")[0];
const b = input[0].split(" ")[1];
const c = input[0].split(" ")[2];

console.log(Number(a) + Number(b) + Number(c));
