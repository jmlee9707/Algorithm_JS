// 🌱 풀이 날짜 : 2023.11.21 (화)
// 🔥 2019 카카오 개발자 겨울 인턴십 > 튜플

function solution(s) {
  let set = new Map();
  s.replaceAll("{", "")
    .replaceAll("}", "")
    .split(",")
    .forEach((el) => {
      set.has(el) ? set.set(el, set.get(el) + 1) : set.set(el, 1);
    });
  const arr = [...set].sort((a, b) => b[1] - a[1]).map((el) => Number(el[0]));

  return arr;
}

const s = "{{1,2,3},{2,1},{1,2,4,3},{2}}";
solution(s);
