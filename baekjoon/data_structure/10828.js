// 🌱 풀이 날짜 : 231116
// 🔥 백준 10828 : 스택

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());
const stack = [];
const res = [];

input.forEach((str) => {
  const [que, num] = str.split(" ");
  switch (que) {
    case "push":
      stack.push(num);
      break;
    case "pop":
      res.push(stack.length !== 0 ? stack.pop() : "-1");
      break;
    case "size":
      res.push(stack.length);
      break;
    case "empty":
      res.push(stack.length === 0 ? "1" : "0");
      break;
    case "top":
      res.push(stack.length !== 0 ? stack.at(stack.length - 1) : "-1");
      break;
  }
});
console.log(res.join("\n"));
