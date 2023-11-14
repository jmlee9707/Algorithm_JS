// 🌱 풀이 날짜 2023.11.14 (화)
// 🔥 백준 1181 : 단어 정렬

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = new Set(input.filter((_, idx) => idx !== 0));
const res = [...arr];

res.sort().sort((a, v) => a.length - v.length);

console.log(res.join("\n"));
