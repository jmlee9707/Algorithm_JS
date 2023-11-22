// 🌱 풀이 날짜 : 231122
// 🔥 백준 2167 : 2차원 배열의 합

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input
  .shift()
  .split(" ")
  .map((e) => Number(e));

const arr = input.slice(0, N).map((el) => el.split(" ").map((e) => Number(e)));

const K = Number(input[N]);

for (let l = 0; l < K; l++) {
  let cnt = 0;
  const [i, j, x, y] = input[N + 1 + l].split(" ").map((e) => Number(e));

  for (let a = i - 1; a < x; a++) {
    for (let b = j - 1; b < y; b++) {
      cnt += arr[a][b];
    }
  }

  console.log(cnt);
}
