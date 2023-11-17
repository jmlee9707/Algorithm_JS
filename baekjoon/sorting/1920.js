// 🌱 풀이 날짜 : 231116
// 🔥 백준 1920 : 수 찾기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);

const arr = input[1]
  .split(" ")
  .map((a) => Number(a))
  .sort((a, b) => a - b);

const res = [];

const binarySearch = (num) => {
  let isFind = false;
  let start = 0;
  let end = N - 1;
  let middle = Math.floor((start + end) / 2);

  while (start <= end) {
    if (arr[middle] > num) {
      end = middle - 1;
      middle = Math.floor((start + end) / 2);
    } else if (arr[middle] < num) {
      start = middle + 1;
      middle = Math.floor((start + end) / 2);
    } else {
      isFind = true;
      break;
    }
  }

  return isFind;
};

input[3]
  .split(" ")
  .map((a) => Number(a))
  .forEach((a) => {
    // 이분 탐색
    binarySearch(a) === true ? res.push(1) : res.push(0);
  });

console.log(res.join("\n"));
