// 🌱 풀이 날짜 2023.11.15 (수)
// 🔥 백준 17413 : 단어뒤집기2

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let isTag = false;
let str = [];
const res = [];

for (let i = 0; i < input.length; i++) {
  const c = input.charAt(i);
  if (isTag) {
    res.push(c);
    if (c === ">") {
      isTag = false;
    }
  } else {
    if (c === "<") {
      isTag = true;
      res.push(...str.reverse());
      res.push(c);
      str = [];
    } else if (c === " ") {
      res.push(...str.reverse());
      res.push(c);
      str = [];
    } else {
      str.push(c);
    }
  }
}
res.push(...str.reverse());

console.log(res.join(""));
