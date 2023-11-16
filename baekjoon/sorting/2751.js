// 🌱 풀이 날짜 : 231116
// 🔥 백준 2751 : 수 정렬하기 2

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());

const arr = input.map((a) => Number(a));
arr.sort((a, b) => a - b);

console.log(arr.join("\n"));
