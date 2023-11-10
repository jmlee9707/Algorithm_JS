// 🌱 풀이 날짜 : 231110
// 🔥 백준 1769 : 3의 배수

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(filePath).toString().trim();
let cnt = 0;
let num = String(input);

while (true) {
  const isThree = num % 3 === 0;
  if (num < 10) {
    console.log(cnt);
    console.log(isThree ? "YES" : "NO");
    break;
  }
  let res = Array.from(String(num), Number).reduce((prev, next) => prev + next);
  cnt++;

  num = res;
}
