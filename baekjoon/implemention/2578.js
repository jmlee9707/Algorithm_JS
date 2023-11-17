// 🌱 풀이 날짜 : 231117
// 🔥 백준 2578 : 빙고

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const inputs = input.map((nums) => nums.split(" ").map((num) => Number(num)));
const cheol = inputs.slice(0, 5);
const ans = inputs.slice(5, 10);

console.log(sol());

function sol() {
  let res = 1;

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      deleteNum(ans[i][j]);
      cnt = checkBingo();
      if (cnt >= 3) break;
      else res++;
    }
  }

  return res;
}

function deleteNum(n) {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (cheol[i][j] === n) {
        cheol[i][j] = 0;
        break;
      }
    }
  }
  return;
}

function checkBingo() {
  let cnt = 0; // 빙고개수

  for (let i = 0; i < 5; i++) {
    let row = 0;
    let col = 0;
    for (let j = 0; j < 5; j++) {
      if (cheol[i][j] == 0) row++;
      if (cheol[j][i] == 0) col++;
    }
    if (row == 5) cnt++;
    if (col == 5) cnt++;
  }

  if (
    cheol[0][0] == 0 &&
    cheol[1][1] == 0 &&
    cheol[2][2] == 0 &&
    cheol[3][3] == 0 &&
    cheol[4][4] == 0
  )
    cnt++;
  if (
    cheol[0][4] == 0 &&
    cheol[1][3] == 0 &&
    cheol[2][2] == 0 &&
    cheol[3][1] == 0 &&
    cheol[4][0] == 0
  )
    cnt++;

  return cnt;
}
