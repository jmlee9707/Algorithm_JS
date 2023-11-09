// 🌱 풀이 날짜 : 2023. 11. 09 (목)

// 새싹 : 문자열
// 🔥 백준 11654 : 아스키 코드
// 🔥 백준 2743 : 단어 길이 재기
// 🔥 백준 2744 : 대소문자 바꾸기
// 🔥 백준 2754 : 학점계산
// 🔥 백준 27866 : 문자와 문자열
// 🔥 백준 11718 : 그대로 출력하기
// 🔥 백준 9086 : 문자열

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < Number(input[0]); i++) {
  console.log(
    input[i + 1].charAt(0) + input[i + 1].charAt(input[i + 1].length - 1)
  );
}
