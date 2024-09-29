/*
 * @Author: yujindong
 * @Email: jindongyu011764@sohu-inc.com
 * @Date: 2024-09-29 14:13:01
 * @LastEditors: yujindong
 * @LastEditTime: 2024-09-29 15:38:45
 * @FilePath: /fe-utils/eslint.config.mjs
 * @Description: 请输入文件描述
 */
import importX from "eslint-plugin-import-x";
import tseslint from "typescript-eslint";

const DOMGlobals = ["window", "document"];
const NodeGlobals = ["module", "require"];

// export default [
//   {files: ["**/*.{js,mjs,cjs,ts}"]},
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
// ];
export default tseslint.config({
  files: ["**/*.{js,mjs,cjs,ts}"],
  extends: [tseslint.configs.base],
  plugins: {
    "import-x": importX,
  },
  rules: {
    "no-debugger": "error",
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
    "no-restricted-globals": ["error", ...DOMGlobals, ...NodeGlobals],
    "@typescript-eslint/no-import-type-side-effects": "error",

    /**
     * 使用@ts-expect-error 代替 @ts-ignore 来注释有意的类型错误
     * 使用@ts-expect-error时，如果被注释的代码类型正确，则自身会抛出错误，用来可以提醒自己删除注释
     */
    "@typescript-eslint/prefer-ts-expect-error": "error",

    // 类型导入时强制使用 import type 而不是 import
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        fixStyle: "inline-type-imports",
        disallowTypeAnnotations: false,
      },
    ],
  },
});
