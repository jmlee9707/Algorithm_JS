// 🌱 풀이 날짜 : 231122
// 🔥 백준 20438 : 출석체크

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K, Q, M] = input[0].split(" ").map((e) => Number(e));

const students = new Array(N + 3).fill(0);

input[1].split(" ").forEach((e) => {
  students[Number(e)] = -1; // 졸고 있는 경우
});

const call = input[2].split(" ").map((e) => Number(e));

for (let i = 0; i < call.length; i++) {
  const num = call[i];
  if (students[num] !== -1) sendCode(num);
}

function sendCode(num) {
  let start = 1;
  while (num * start <= N + 2) {
    if (students[num * start] !== -1) students[num * start] = 1;
    start++;
  }
}

const sum = new Array(N + 3).fill(0);
for (let i = 3; i < students.length; i++) {
  sum[i] = students[i] !== 1 ? sum[i - 1] + 1 : sum[i - 1];
}

const res = [];

for (let i = 0; i < M; i++) {
  const [start, end] = input[i + 3].split(" ").map((e) => Number(e));
  res.push(sum[end] - sum[start - 1]);
}

console.log(res.join("\n"));
