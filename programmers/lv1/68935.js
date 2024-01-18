// 🌱 풀이 날짜 : 2024.01.18 (목)
// 🔥 월간 코드 챌린지 시즌 1 > 3진법 뒤집기

function solution(n) {
  var answer = n.toString(3).split("").reverse().join("");
  return parseInt(answer, 3);
}
