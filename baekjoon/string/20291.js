// 🌱 풀이 날짜 2023.11.15 (수)
// 🔥 백준 20291 : 파일 정리

let startTime = new Date().getTime();

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);

const arr = input.splice(1, N + 1);
const files = {}; // object

arr.map((str) => {
  const [_, format] = str.split(".");
  files[format] ? files[format]++ : (files[format] = 1);
});

const res = Object.keys(files)
  .sort()
  .forEach((str) => console.log(str + " " + files[str]));
