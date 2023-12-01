// 🌱 풀이 날짜 : 2023.12.01 (금)
// 🔥 2019 KAKAO BLIND RECRUITMENT > 실패율

function solution(N, stages) {
  var answer = [];
  const ppl = [];
  for (let i = 0; i <= N; i++) {
    ppl.push([i, 0]);
  }

  stages.forEach((n) => {
    n !== N + 1 ? (ppl[n][1] += 1) : null;
  });

  let total = stages.length;

  for (let i = 1; i <= N; i++) {
    const fail = ppl[i][1] === 0 || total === 0 ? 0 : ppl[i][1] / total;
    total -= ppl[i][1];
    ppl[i][1] = fail;
  }

  answer = ppl
    .shift()
    .sort((a, b) => {
      if (a[1] === b[1]) return a[0] - b[0];
      else return b[1] - a[1];
    })
    .map((a) => a[0]);

  return answer;
}
