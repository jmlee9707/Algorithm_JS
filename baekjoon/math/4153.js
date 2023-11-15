// 🌱 풀이 날짜 : 231115
// 🔥 백준 4153 : 직각삼각형

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.forEach((st) => {
  const arr = st
    .split(" ")
    .map((a) => Number(a))
    .sort((a, b) => a - b);

  if (arr[0] === 0 && arr[1] === 0 && arr[2] === 0) return;

  Math.pow(arr[2], 2) == Math.pow(arr[1], 2) + Math.pow(arr[0], 2)
    ? console.log("right")
    : console.log("wrong");
});
