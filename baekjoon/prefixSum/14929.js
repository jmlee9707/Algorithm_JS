// 🌱 풀이 날짜 : 231121
// 🔥 백준 14929 : 귀찮아 (SIB)

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift()) - 1;

const arr = input[0].split(" ").map((a) => Number(a));
const sum = arr.filter(() => true);

for (let i = 1; i <= N; i++) {
  sum[i] = arr[i] + sum[i - 1];
}

let res = 0;

arr.forEach((a, idx) => {
  res += +a * (sum[N] - sum[idx]);
});
console.log(res);
