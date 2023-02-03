const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

/*
    백준 10157 방번호
*/

// 백준 달팽이 문제와 비슷
// 상 우 하 좌

const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];

const C = Number(input[0].split(" ")[0]);
const R = Number(input[0].split(" ")[1]);
const K = Number(input[1]);

if (K > R * C) {
  // 프로그램 종료, 배정할 수 없는 경우
  console.log(0);
  process.exit();
}

let stage = Array.from(Array(R), () => new Array(C).fill(false)); // 이차원 배열 생성
// let res = new Array(2); // 0: x값, 1: y값

let start = 1;
let r = R - 1;
let c = 0;
let d = 0;

while (true) {
  stage[r][c] = true;
  if (start == K) break; //결과 출력

  const nr = r + dr[d];
  const nc = c + dc[d];

  if (nr >= 0 && nc >= 0 && nr < R && nc < C && !stage[nr][nc]) {
    r = nr;
    c = nc;
    start++;
  } else {
    d = (d + 1) % 4; // 방향 전환
    continue;
  }
}

console.log(`${c + 1} ${R - r}`); // 결과값 출력
