// 🌱 풀이 날짜 : 2023.11.09 (목)
// 🔥 백준 1157 : 단어공부

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .toUpperCase()
  .split("");

const cnt = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  const n = Number(input[i].charAt(0).charCodeAt() - 65);
  cnt[n] += 1;
}

const max = Math.max(...cnt);
let c = 0;

for (let al of cnt) {
  if (al == max) c++;
}

if (c > 1) console.log("?");
else {
  const idx = cnt.findIndex((el) => el === max);
  console.log(String.fromCharCode(idx + 65));
}
