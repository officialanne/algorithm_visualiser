import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";

export default [
  eslint.configs.recommended,
  prettier,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-console": "warn",
    },
  },
  {
    ignores: ["dist/", "node_modules/"],
  },
];
