// 🌱 풀이 날짜 2023.11.14 (화)
// 🔥 백준 1764 : 듣보잡

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map((e) => Number(e));

const notHear = new Set(input.slice(1, n + 1));
const notSee = input.slice(n + 1, n + m + 1).filter((el) => notHear.has(el));

notSee.sort();

console.log(notSee.length);
console.log(notSee.join("\n"));
