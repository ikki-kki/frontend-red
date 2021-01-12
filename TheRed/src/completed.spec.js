import { game, NotNumberError, NotArrayError } from "./completed";

describe("369 게임", () => {
  it("숫자 배열을 입력하면 숫자를 쉼표로 구분한 문자열을 반환한다.", () => {
    expect(game([1])).toBe("1");
    expect(game([2])).toBe("2");
    expect(game([1, 2])).toBe("1,2");
  });

  it('배열에서 3, 6, 9는 "짝"으로 표시되어야 한다.', () => {
    expect(game([1, 2, 3])).toBe("1,2,짝");
    expect(game([4, 5, 6, 7])).toBe("4,5,짝,7");
    expect(game([8, 9, 10])).toBe("8,짝,10");
  });

  it("10의 자리 숫자도 올바르게 처리해야 한다.", () => {
    expect(game([10, 11, 12, 13, 14, 15])).toBe("10,11,12,짝,14,15");
    expect(game([13, 14, 15, 16, 17, 18, 19])).toBe("짝,14,15,짝,17,18,짝");
  });

  it('"짝"은 숫자 안에 있는 3,6,9의 개수와 같아야 한다.', () => {
    expect(game([28, 29, 30, 31, 32, 33, 34])).toBe("28,짝,짝,짝,짝,짝짝,짝");
    expect(game([298, 299, 300, 301, 302, 303])).toBe("짝,짝짝,짝,짝,짝,짝짝");
  });

  it("배열에 숫자가 아닌 값이 있으면 NotNumberError를 반환한다", () => {
    expect(() => game([1, 2, null])).toThrow(NotNumberError);
  });

  it("배열이 아닌 값이 전달되면 NotArrayError를 반환한다.", () => {
    expect(() => game(undefined)).toThrow(NotArrayError);
  });
});
