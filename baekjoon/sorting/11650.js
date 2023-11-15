// 🌱 풀이 날짜 : 231115
// 🔥 백준 11650 : 좌표 정렬하기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());

const sets = [];

input.forEach((st) => {
  const [x, y] = st.split(" ").map((a) => Number(a));
  sets.push({ x: x, y: y });
});

let res = "";

sets
  .sort((a, b) => (a.x === b.x ? a.y - b.y : a.x - b.x))
  .forEach((a) => {
    res += `${a.x} ${a.y}\n`;
  });

console.log(res);
