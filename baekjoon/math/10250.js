const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const H = Number(input[i].split(" ")[0]);
  const N = Number(input[i].split(" ")[2]);
  let res = [0, 0];

  if (N % H === 0) {
    // 꼭대기
    res[0] = H;
    res[1] = N / H;
  } else {
    res[0] = N % H;
    res[1] = Math.floor(N / H) + 1;
  }

  console.log(res[1] < 10 ? res[0] + "0" + res[1] : `${res[0]}${res[1]}`);
}
