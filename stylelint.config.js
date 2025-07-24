/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-idiomatic-order",
  ],
  plugins: ["stylelint-order"],

  rules: { "at-rule-no-deprecated": [true, { ignoreAtRules: ["apply"] }] },
}
