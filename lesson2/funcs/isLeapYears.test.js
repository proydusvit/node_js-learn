// 1.отримує ціле число
// 2.повертуає тру якщо рік високісний і фолс якщо ні
// 3.якщо  не ввірно то викуинути ясну причину цього

// як по номеру року  вичеслити високісний рік
// якщо це менше 41 то це помилка . якщо цене число а  інший тип данних. якщо це не ціле число
//

const isLeapYear = require("./isLeapYear");

describe("test isLeapYear function", () => {
  test("2008 - true", () => {
    expect(isLeapYear(2008)).toBe(true);
  });
  test("2003 - false", () => {
    expect(isLeapYear(2003)).toBe(false);
  });
  test("41 - error `year must be 42 or more`", () => {
    expect(() => isLeapYear(41)).toThrow("year must be 42 or more");
  });
  test("2008.4 - error `year must be integer`", () => {
    expect(() => isLeapYear(2008.4)).toThrow("year must be integer");
  });
  test("() - error `year must be exist`", () => {
    expect(() => isLeapYear()).toThrow("year must be exist");
  });
  test("true - error `year must be number`", () => {
    expect(() => isLeapYear(true)).toThrow("year must be number");
  });
  test("[] - error `year must be number`", () => {
    expect(() => isLeapYear([])).toThrow("year must be number");
  });
});
