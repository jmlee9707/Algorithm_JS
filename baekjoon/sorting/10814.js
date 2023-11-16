// 🌱 풀이 날짜 : 231115
// 🔥 백준 10814 : 나이순 정렬

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());

const sets = [];

input.forEach((st) => {
  const [x, y] = st.split(" ");
  sets.push({ x: Number(x), y: y });
});

sets
  .sort((a, b) => a.x - b.x)
  .forEach((a) => {
    console.log(a.x + " " + a.y);
  });
