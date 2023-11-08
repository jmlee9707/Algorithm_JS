// 🌱 풀이 날짜 : 2023. 11. 08 (수)

// 새싹 입력과 계산
// 🔥 백준 1330 : 두 수 비교하기
// 🔥 백준 9498 : 시험 성적
// 🔥 백준 14681 : 사분면 고르기
// 🔥 백준 2753 : 윤년
// 🔥 백준 2420 : 사파리월드

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0].split(" ")[0]);
const m = Number(input[0].split(" ")[1]);

console.log(Math.abs(n - m));
