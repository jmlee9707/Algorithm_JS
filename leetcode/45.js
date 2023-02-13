/*
 *  0번 인덱스에서 시작, 최소 몇번의 점프로 마지막 인덱스 까지 도달 가능?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let res = 0; // 결과, 이동횟수 카운팅
  let nowMax = 0; // 현재 위치한 인덱스에서 가장 멀리 갈 수 있는 곳
  let maxIndex = nums[0]; // 가장 멀리 갈 수 잇는 곳

  for (let i = 0; i < nums.length - 1; i++) {
    maxIndex = maxIndex > i + nums[i] ? maxIndex : i + nums[i];
    console.log(i);

    if (nowMax == i) {
      nowMax = maxIndex;
      res++;
    }
  }

  return res;
};
