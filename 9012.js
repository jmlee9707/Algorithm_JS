const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let res = "YES";
  const str = input[i];
  let stack = []; // stack 생성

  for (let j = 0; j < str.length; j++) {
    const temp = str[j];
    if (temp === "(") {
      stack.push(temp);
    } else {
      if (stack.length !== 0) {
        stack.pop(temp);
      } else {
        res = "NO";
        break;
      }
    }
  }

  if (stack.length !== 0) res = "NO";

  console.log(res);
}
