// 🌱 풀이 날짜 : 2024.01.18 (목)
// 🔥 월간 코드 챌린지 시즌 1 > 이진 변환 반복하기

function solution(s) {
  var answer = new Array(2).fill(0);
  let str = s;

  while (true) {
    if (str == "1") break;
    answer[0] += 1;

    const factory = str.toString().replaceAll("0", "");
    answer[1] += str.length - factory.length;
    str = factory.length.toString(2);
  }

  return answer;
}
