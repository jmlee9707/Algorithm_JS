// 🌱 풀이 날짜 2023.11.14 (화)
// 🔥 백준 1316 : 그룹 단어 체커

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
let cnt = 0;

for (let i = 1; i <= n; i++) {
  const word = input[i];
  const letter = [];
  let isGroup = true;
  for (let j = 0; j < word.length; j++) {
    if (letter.indexOf(word[j]) === -1) letter.push(word[j]); // 아직 없을 경우
    else {
      if (letter.indexOf(word[j]) !== letter.length - 1) {
        isGroup = false;
        break;
      }
    }
  }

  if (isGroup) cnt++;
}

console.log(cnt);
