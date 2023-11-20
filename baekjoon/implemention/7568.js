// 🌱 풀이 날짜 : 231120
// 🔥 백준 7568 : 덩치

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = input.shift();

const info = input.map((v) => ({
  weight: Number(v.split(" ")[0]),
  height: Number(v.split(" ")[1]),
}));
const res = [];

for (let i = 0; i < n; i++) {
  let rank = 1;
  for (let j = 0; j < n; j++) {
    if (
      i !== j &&
      info[i].weight < info[j].weight &&
      info[i].height < info[j].height
    )
      rank++;
  }
  res.push(rank);
}

console.log(res.join(" "));
