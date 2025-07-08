import js from "@eslint/js"
import jsxA11y from "eslint-plugin-jsx-a11y"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import { globalIgnores } from "eslint/config"
import globals from "globals"
import tseslint from "typescript-eslint"

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
      jsxA11y.flatConfigs.recommended,
      react.configs.flat.recommended,
    ],
    languageOptions: {
      ...jsxA11y.flatConfigs.recommended.languageOptions,
      ...react.configs.flat.recommended.languageOptions,
      ecmaVersion: 2020,
      globals: { ...globals.serviceworker, ...globals.browser },
    },
    settings: { react: { version: "detect" } },
    rules: { "react/react-in-jsx-scope": "off" },
  },
])
