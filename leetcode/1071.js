/*
 * leetcode 1071
 * 1071. Greatest Common Divisor of Strings
 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  let res = "";
  const shortStr = str1.length < str2.length ? str1 : str2;
  const longStr = str1.length >= str2.length ? str1 : str2;

  const checkDivide = (s1, s2, div) => {
    let temp1 = s1.replaceAll(div, "");
    let temp2 = s2.replaceAll(div, "");
    if (temp1 == "" && temp2 == "") return true;
    else return false;
  };

  let cnt = shortStr.length;

  while (res === "") {
    if (cnt == 0) break;
    let start = 0;

    while (start + cnt <= shortStr.length) {
      const tempDiv = shortStr.substring(start, start + cnt);

      if (checkDivide(shortStr, longStr, tempDiv)) {
        res = tempDiv;
        break;
      } else start++;
    }

    cnt--;
  }

  return res;
};
