// 🌱 풀이 날짜 : 2023.11.29 (수)
// 🔥 2018 KAKAO BLIND RECRUITMENT > [1차] 비밀지도

function solution(n, arr1, arr2) {
  var answer = [];

  // toString(2) 로 풀이가 더 깔끔

  for (let i = 0; i < n; i++) {
    const num1 = divideNum(arr1[i], n);
    const num2 = divideNum(arr2[i], n);

    let str = "";
    for (let j = 0; j < n; j++) {
      if (num1[j] === "1" || num2[j] === "1") str += "#";
      else str += " ";
    }
    answer.push(str);
  }
  return answer;
}

function divideNum(num, n) {
  let temp = num;
  let res = "";
  for (let i = 0; i < n; i++) {
    res = (temp % 2) + res;
    temp = Math.floor(temp / 2);
  }
  return res;
}
