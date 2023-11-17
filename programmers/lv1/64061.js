// 🌱 풀이 날짜 : 2023.11.17 (금)
// 🔥 2019 카카오 개발자 겨울 인턴십 > 크레인 인형뽑기 게임

function solution(board, moves) {
  var answer = 0;
  const bucket = [];
  const N = board[0].length;
  const M = board.length;

  const poppop = () => {
    // 인형 뽑기
    bucket.pop();
    answer += 2;
    return;
  };

  const popDolls = (num) => {
    // 인형 옮기기
    for (let i = 0; i < M; i++) {
      if (board[i][num] == 0) continue;
      else {
        const idx = board[i][num];
        board[i][num] = 0;
        bucket.at(-1) === idx ? poppop() : bucket.push(idx);
        break;
      }
    }
  };

  moves.forEach((n) => {
    popDolls(n - 1);
  });

  return answer;
}
