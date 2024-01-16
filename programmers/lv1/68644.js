// 🌱 풀이 날짜 : 2024.01.16 (화)
// 🔥 월간 코드 챌린지 시즌1 > 두개 뽑아서 더하기

function solution(numbers) {
  let set = new Set([]);

  const size = numbers.length;

  for (let i = 0; i < size - 1; i++) {
    for (let j = i + 1; j < size; j++) {
      set.add(numbers[i] + numbers[j]);
    }
  }
  const answer = [...set].sort((a, b) => a - b);
  return answer;
}
