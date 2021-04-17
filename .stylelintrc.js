module.exports = {
  plugins: [
    "stylelint-prettier",
    "stylelint-scss"
  ],
  extends: [
    "stylelint-config-recommended-scss",
    "stylelint-config-recess-order",
    "stylelint-prettier/recommended",
    "stylelint-config-prettier",
  ],
  ignoreFiles: [
    '**/node_modules/**',
  ],
  rules: {
    "at-rule-no-unknown":[true,{
      "ignoreAtRules":["function","if","for","each","include","mixin","content", "use", "forward", "return", "error", "else"]
    }]
  }
};