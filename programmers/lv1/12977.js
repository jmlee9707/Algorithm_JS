// 🌱 풀이 날짜 : 2024.01.18 (목)
// 🔥 summer/winter coding > 소수 만들기

function solution(nums) {
  let answer = 0;
  // 3개수 합 구하기
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (!check(nums[i] + nums[j] + nums[k])) answer++;
      }
    }
  }

  return answer;
}

function check(num) {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return true;
  }

  return false;
}
