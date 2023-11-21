// 🌱 풀이 날짜 : 2023.11.21 (화)
// 🔥 2021 카카오 채용연계형 인턴십 > 숫자 문자열과 영단어

function solution(s) {
  let str = s;

  const nums = [
    { num: 0, al: "zero" },
    { num: 1, al: "one" },
    { num: 2, al: "two" },
    { num: 3, al: "three" },
    { num: 4, al: "four" },
    { num: 5, al: "five" },
    { num: 6, al: "six" },
    { num: 7, al: "seven" },
    { num: 8, al: "eight" },
    { num: 9, al: "nine" },
  ];

  nums.forEach((num) => {
    str = str.replaceAll(num.al, num.num);
  });
  return Number(str);
}

const s = "one4seveneight";
console.log(solution(s));
