// 🌱 풀이 날짜 : 231117
// 🔥 백준 4396 : 지뢰 찾기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = input.shift();
const bomb = input.slice(0, n).map((a) => Array.from(a)); // 지뢰 위치
const map = input.slice(n, 2 * n + 1).map((a) => Array.from(a)); // 판 정보

const dr = [-1, 1, 0, 0, -1, -1, 1, 1]; // 상하좌우 좌상 우상 좌하 우하
const dc = [0, 0, -1, 1, -1, 1, -1, 1];

playgame();

console.log(map.map((arr) => arr.join("")).join("\n"));

function playgame() {
  let isOpen = false;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] !== "x") continue;
      // x이면 열린 것
      if (!isOpen && bomb[i][j] === "*") isOpen = true;

      let cnt = 0;
      for (let d = 0; d < 8; d++) {
        const nr = i + dr[d];
        const nc = j + dc[d];

        if (nr >= 0 && nc >= 0 && nc < n && nr < n && bomb[nr][nc] === "*")
          cnt++;
      }
      map[i][j] = cnt;
    }
  }
  if (isOpen) checkBomb();
  return;
}

function checkBomb() {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (bomb[i][j] === "*") map[i][j] = "*";
    }
  }
  return;
}
