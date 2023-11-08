// 🌱 풀이 날짜 : 2023. 11. 08 (수)

// 새싹 : 조건 & 빠른 입출력
// 🔥 백준 10871 : X보다 작은 수
// 🔥 백준 10807 : 개수 세기
// 🔥 백준 5597 : 과제 안 내신 분..?
// 🔥 백준 2738 : 행렬 덧셈

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input[0].split(" ")[0]);
const m = Number(input[0].split(" ")[1]);

let arr1 = [];
let arr2 = [];

for (let i = 0; i < n; i++) {
  arr1.push(input[i + 1].split(" "));
}

for (let i = 0; i < n; i++) {
  arr2.push(input[i + 1 + n].split(" "));
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    arr1[i][j] = Number(arr1[i][j]) + Number(arr2[i][j]);
  }
  console.log(arr1[i].join(" "));
}
