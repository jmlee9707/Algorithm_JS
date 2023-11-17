// 🌱 풀이 날짜 : 2023.11.17 (금)
// 🔥 2021 Dev-Matching: 웹 백엔드 개발자(상반기) > 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
  var answer = [];
  // 일치하는 갯수
  let zero = lottos.filter((i) => i === 0).length;
  let cnt = lottos.filter((e) => win_nums.includes(e)).length;
  answer.push(check(cnt + zero));
  answer.push(check(cnt));

  return answer;
}
function check(num) {
  let prize = 0;

  if (num < 2) prize = 6;
  else if (num == 2) prize = 5;
  else if (num == 3) prize = 4;
  else if (num == 4) prize = 3;
  else if (num == 5) prize = 2;
  else prize = 1;

  return prize;
}
