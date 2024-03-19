module.exports = {
  extends: ['skiff-eslint/backend'],
  parserOptions: {
    project: 'tsconfig.json'
  },
  ignorePatterns: ['dist/**', '.eslintrc.js'],
};
