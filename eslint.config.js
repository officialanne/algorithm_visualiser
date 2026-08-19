import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default [
  eslint.configs.recommended,
  prettier,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "no-console": "warn",
    },
  },
  {
    ignores: ["dist/", "node_modules/"],
  },
];
