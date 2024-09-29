/*
 * @Author: yujindong
 * @Email: jindongyu011764@sohu-inc.com
 * @Date: 2024-09-29 14:16:01
 * @LastEditors: yujindong
 * @LastEditTime: 2024-09-29 16:00:02
 * @FilePath: /fe-utils/packages/common/src/index.ts
 * @Description: 请输入文件描述
 */
import b from "./b";
import { c, d, e } from "./c";
import { type TestType, test } from "./test";

export const isNumber = (value: unknown): value is number =>
  typeof value === "number";

export const isString = (value: unknown): value is string =>
  typeof value === "string";

export const isBoolean = (value: unknown): value is boolean =>
  typeof value === "boolean";

export const isArray = (value: unknown): value is unknown[] =>
  Array.isArray(value);

export const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

export const isFunction = (
  value: unknown,
): value is (...args: any[]) => any => {
  return typeof value === "function";
};

const t: TestType = {
  name: "yujindong",
};

console.info(b, c, d, e, test);
