// 🌱 풀이 날짜 : 2024.01.17 (수)
// 🔥 2024 kakao winter internship > 가장 많이 받은 선물

function solution(friends, gifts) {
  var answer = 0; // 선물을 가장 많이 받는 친구의 받은 선물 수
  const index = new Map();
  const giftCnt = new Map(); // 선물지수

  friends.forEach((a, idx) => {
    index.set(a, idx);
    giftCnt.set(a, 0);
  });

  const info = Array.from(Array(friends.length), () =>
    Array(friends.length).fill(0)
  ); // 2차원 배열 선언
  // const next = [...info]; // 다음달

  gifts.forEach((str) => {
    const giver = index.get(str.split(" ")[0]);
    const getter = index.get(str.split(" ")[1]);

    info[giver][getter]++;
  });

  // 선물 지수 구하기
  for (let i = 0; i < info.length; i++) {
    let give = 0,
      get = 0;

    for (let j = 0; j < info.length; j++) {
      if (i === j) continue;
      give += info[i][j];
      get += info[j][i];
    }
    giftCnt.set(friends[i], give - get);
  }

  // 다음달 받을 선물의 개수
  for (let i = 0; i < friends.length; i++) {
    let cnt = 0;

    for (let j = 0; j < friends.length; j++) {
      if (i === j) continue;

      if (
        (info[i][j] === info[j][i]) &
        (giftCnt.get(friends[i]) > giftCnt.get(friends[j]))
      ) {
        // 주고받지 않앗거나 같은 경우
        cnt++;
      } else if (info[i][j] > info[j][i]) cnt++;
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}
