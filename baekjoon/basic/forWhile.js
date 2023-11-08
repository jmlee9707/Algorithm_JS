// 🌱 풀이 날짜 : 2023. 11. 08 (수)

// 새싹 : 조건 & 빠른 입출력
// 🔥 백준 2741 : N 찍기
// 🔥 백준 10872 : 팩토리얼
// 🔥 백준 10950 : A+B - 3
// 🔥 백준 10952 : A+B - 5
// 🔥 백준 2739 : 구구단
// 🔥 백준 2438 : 별 찍기 - 1
// 🔥 백준 10951 : A+B - 4
// 🔥 백준 15552 : 빠른 A+B

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let tc = Number(input[0]);
let str = "";

for (let i = 1; i <= tc; i++) {
  const a = Number(input[i].split(" ")[0]);
  const b = Number(input[i].split(" ")[1]);
  const res = a + b;
  str += res + "\n";
}

console.log(str);
