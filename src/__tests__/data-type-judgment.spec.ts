import {
  isUndefined,
  isNull,
  isNaN,
  isPureObject,
  isString,
  isBoolean,
  isTrue,
  isFalse,
  isNumber,
  isArray,
  isError,
  isFunction,
  isDate,
  isObjectNonNull,
} from "../data-type-judgment";

describe("数据类型判断相关函数", () => {
  const symbol = Symbol();
  const noop = () => {};
  const reg = new RegExp(/\w/);

  test("isUndefined()", () => {
    // expect(isUndefined()).toBe(true);
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined(void 0)).toBe(true);

    expect(isUndefined(0)).toBe(false);
  });

  test("isNull()", () => {
    // expect(isNull()).toBe(false);
    expect(isNull({})).toBe(false);

    expect(isNull(null)).toBe(true);
  });

  test("isNaN()", () => {
    // expect(isNaN()).toBe(false);
    expect(isNaN(1)).toBe(false);

    expect(isNaN(NaN)).toBe(true);
  });

  test("isString()", () => {
    // expect(isString()).toBe(false);
    expect(isString(1)).toBe(false);

    expect(isString("")).toBe(true);
    expect(isString("1234567890")).toBe(true);
    expect(isString(String(1234567890))).toBe(true);
    expect(isString(`  `)).toBe(true);
  });

  test("isBoolean()", () => {
    // expect(isBoolean()).toBe(false);
    expect(isBoolean("")).toBe(false);
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean([])).toBe(false);
    expect(isBoolean({})).toBe(false);

    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(Boolean(1))).toBe(true);
  });

  test("isTrue()", () => {
    // expect(isTrue()).toBe(false);
    expect(isTrue(1)).toBe(false);
    expect(isTrue([])).toBe(false);
    expect(isTrue({})).toBe(false);
    expect(isTrue(false)).toBe(false);

    expect(isTrue(true)).toBe(true);
  });

  test("isFalse()", () => {
    // expect(isFalse()).toBe(false);
    expect(isFalse(1)).toBe(false);
    expect(isFalse([])).toBe(false);
    expect(isFalse({})).toBe(false);
    expect(isFalse(true)).toBe(false);

    expect(isFalse(false)).toBe(true);
  });

  test("isNumber()", () => {
    // expect(isNumber()).toBe(false);
    expect(isNumber("1234")).toBe(false);
    expect(isNumber(`1234`)).toBe(false);

    expect(isNumber(NaN)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(Number("123"))).toBe(true);
  });

  test("isArray()", () => {
    // expect(isArray()).toBe(false);
    expect(isArray({})).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(0)).toBe(false);

    expect(isArray([])).toBe(true);
    expect(isArray(Array(1))).toBe(true);
  });

  test("isError()", () => {
    // expect(isError()).toBe(false);
    expect(isError(Error)).toBe(false);

    expect(isError(new Error("MSG"))).toBe(true);
  });

  test("isFunction()", () => {
    // expect(isFunction()).toBe(false);
    expect(isFunction([])).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction(reg)).toBe(false);

    expect(isFunction(noop)).toBe(true);
    expect(isFunction(function () {})).toBe(true);
    expect(isFunction(Function)).toBe(true);
    expect(isFunction(Date)).toBe(true);
    expect(isFunction(Number)).toBe(true);
  });

  test("isDate()", () => {
    // expect(isDate()).toBe(false);
    expect(isDate(Date())).toBe(false);
    expect(isDate("2022-10-01")).toBe(false);

    expect(isDate(new Date())).toBe(true);
  });

  test("isObjectNonNull()", () => {
    // expect(isObjectNonNull()).toBe(false);
    expect(isObjectNonNull(null)).toBe(false);
    expect(isObjectNonNull(noop)).toBe(false);

    expect(isObjectNonNull({})).toBe(true);
    expect(isObjectNonNull([])).toBe(true);
    expect(isObjectNonNull(new Date())).toBe(true);
    expect(isObjectNonNull(new Number())).toBe(true);
    expect(isObjectNonNull(new Error())).toBe(true);
  });

  test("isPureObject()", () => {
    // 基础类型
    // expect(isPureObject()).toBe(false);
    expect(isPureObject(1)).toBe(false);
    expect(isPureObject("")).toBe(false);
    expect(isPureObject(true)).toBe(false);
    expect(isPureObject(undefined)).toBe(false);
    expect(isPureObject(symbol)).toBe(false);
    // 基本包装类型
    expect(isPureObject(Number(1))).toBe(false);
    expect(isPureObject(String(""))).toBe(false);
    expect(isPureObject(Boolean(true))).toBe(false);
    // 对象类型
    expect(isPureObject({})).toBe(true);
    expect(isPureObject([])).toBe(false);
    expect(isPureObject(null)).toBe(false);
    expect(isPureObject(noop)).toBe(false);
    expect(isPureObject(reg)).toBe(false);
  });
});
