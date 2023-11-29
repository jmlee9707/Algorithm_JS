// 🌱 풀이 날짜 : 2023.11.29 (수)
// 🔥 [PCCP 기출문제] 1번 : lv1

function solution(bandage, health, attacks) {
  const [t, secHeal, extraHeal] = bandage;
  const que = [...attacks];

  let heal = health; // 현재 체력
  let sec = 0; // 연속 회복 시간
  let [nowSec, totalSec] = [0, attacks.at(-1)[0] + 1];

  while (nowSec < totalSec) {
    const att = que[0];

    if (nowSec == att[0]) {
      // 공격 받기
      heal -= att[1];
      sec = 0; // 연속동작 초기화
      que.shift();
    } else {
      // 공격없이 힐링!
      if (sec == t) {
        heal += secHeal;
        heal += extraHeal;
        if (heal > health) heal = health;
        sec = 0;
      } else {
        heal = heal < health ? heal + secHeal : health;
      }
    }

    if (heal <= 0) break;
    nowSec++;
    sec++;
  }

  return heal <= 0 ? -1 : heal;
}
