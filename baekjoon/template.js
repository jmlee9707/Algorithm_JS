// 🌱 풀이 날짜
// 🔥 백준 (문제 번호 ) : (문제 이름)

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
