const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

/*
 * 백준 1193 분수 찾기
 */
const N = Number(input); // 입력값

let maxV = 0,
  line = 0;

let under, up;

while (N > maxV) {
  line++;
  maxV += line;
}

const num = N - maxV + line; // 몇번째 원소?

if (line % 2 == 0) {
  up = num;
  under = line + 1 - up;
} else {
  up = line + 1 - num;
  under = line + 1 - up;
}

console.log(`${up}/${under}`);
