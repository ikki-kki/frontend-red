/* 기능 명세
 * 1. 숫자 배열을 입력하면 숫자를 쉼표로 구분한 문자열을 반환한다.
 * 2. 단, 3, 6, 9가 포함된 숫자는 '짝'으로 표시한다.
 * 3. '짝'의 개수는 3, 6, 9의 개수와 같다.
 */
export class NotNumberError extends Error {
  constructor() {
    super("숫자가 아닌 값이 포함되어 있습니다.");
    this.name = "NotNumberError";
  }
}

export class NotArrayError extends Error {
  constructor() {
    super("배열이 아닙니다.");
    this.name = "NotArrayError";
  }
}

export function game(arr) {
  if (!Array.isArray(arr)) {
    throw new NotArrayError();
  }

  if (arr.some((num) => typeof num !== "number")) {
    throw new NotNumberError();
  }

  return arr
    .map((num) => {
      const str = String(num).replace(/[^369]/g, "");

      if (/[369]/.test(str)) {
        return "짝".repeat(str.length);
      }

      return num;
    })
    .join(",");
}
