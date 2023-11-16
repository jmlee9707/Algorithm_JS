// 🌱 풀이 날짜 : 231116
// 🔥 백준 10845 : 큐

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());
const que = [];
const res = [];

input.forEach((str) => {
  const [ques, num] = str.split(" ");
  switch (ques) {
    case "push":
      que.push(num);
      break;
    case "pop":
      res.push(que.length !== 0 ? que.shift() : "-1");
      break;
    case "size":
      res.push(que.length);
      break;
    case "empty":
      res.push(que.length === 0 ? "1" : "0");
      break;
    case "front":
      res.push(que.length !== 0 ? que.at(0) : "-1");
      break;
    case "back":
      res.push(que.length !== 0 ? que.at(que.length - 1) : "-1");
      break;
  }
});
console.log(res.join("\n"));
