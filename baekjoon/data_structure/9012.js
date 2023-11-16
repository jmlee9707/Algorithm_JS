// 🌱 풀이 날짜 : 231116
// 🔥 백준 9012 : 괄호

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
Number(input.shift());

const res = [];

input.forEach((str) => {
  let isVPS = true;
  const arr = Array.from(str);
  const stack = [];
  arr.forEach((s) => {
    if (s === "(") stack.push(s);
    else {
      // )일경우
      if (stack.length === 0 || stack.pop() !== "(") {
        isVPS = false;
      }
    }
  });

  isVPS && stack.length === 0 ? res.push("YES") : res.push("NO");
});
console.log(res.join("\n"));
