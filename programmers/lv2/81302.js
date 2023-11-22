// 🌱 풀이 날짜 : 2023.11.22 (수)
// 🔥 2021 카카오 채용 연계형 인턴십 > 거리두기 확인하기

const dr = [1, 1, 0, 0]; // 상하좌우 좌상우상 좌하우하
const dc = [0, 0, -1, 1];

function solution(places) {
  var answer = [];
  for (let i = 0; i < places.length; i++) {
    console.log(i);
    check(places[i]) ? answer.push(1) : answer.push(0);
  }
  return answer;
}
function check(seats) {
  let ppl = [];

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (seats[i][j] === "P") {
        ppl.push({ x: i, y: j });
      }
    }
  }

  for (let i = 0; i < ppl.length; i++) {
    if (move(seats, ppl[i].x, ppl[i].y, 0) === false) return false;
  }
  return true;
}

function move(seats, r, c, cnt) {
  let que = [];
  let visited = Array.from({ length: 5 }, () => Array(5).fill(false));

  que.push({ x: r, y: c, cnt: 0 });
  visited[r][c] = true;

  while (que.length !== 0) {
    const q = que.shift();
    if (q.cnt >= 2) continue;

    for (let d = 0; d < 4; d++) {
      const nr = q.x + dr[d];
      const nc = q.y + dc[d];

      if (nr >= 0 && nc >= 0 && nr < 5 && nc < 5 && !visited[nr][nc]) {
        if (seats[nr][nc] === "O") que.push({ x: nr, y: nc, cnt: q.cnt + 1 });
        else if (seats[nr][nc] === "P" && q.cnt < 2) return false;

        visited[nr][nc] = true;
      }
    }
  }
  return true;
}
