// 🌱 풀이 날짜 : 2024.01.19 (금)
// 🔥 summer/winter coding > 영어 끝말잇기

function solution(n, words) {
  var answer = [0, 0];
  let isPlaying = true;
  const map = [];
  let idx = -1;
  let lastword = "";
  console.log(words.length);

  for (let i = 0; i < words.length; i++) {
    const str = words[i];

    if (
      str.length <= 1 ||
      (i !== 0 && str[0] !== lastword) ||
      map.includes(str)
    )
      isPlaying = false;

    if (isPlaying) {
      map.push(str);
      lastword = str.split("").reverse()[0];
    } else {
      isPlaying = false;
      idx = i;
      break;
    }
  }

  if (isPlaying) return [0, 0];

  answer[0] = (idx % n) + 1; // 탈락하는 사람 번호
  answer[1] = Math.floor(idx / n) + 1; // 몇번째 차례?

  return answer;
}
