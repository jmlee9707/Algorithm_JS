// 🌱 풀이 날짜 : 231122
// 🔥 백준 1620 : 나는야 포켓몬 마스터 이다솜

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map((e) => Number(e));

const map = new Map();

for (let i = 1; i <= N; i++) {
  const name = input[i];
  map.set(name, i);
  map.set(i + "", name);
}
const res = [];
for (let i = 1; i <= M; i++) {
  const ques = input[N + i];
  res.push(map.get(ques));
}
console.log(res.join("\n"));
