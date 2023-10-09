module.exports = {
  extends: ['next', 'prettier', 'plugin:@typescript-eslint/recommended'],
  plugins: ['prettier', 'simple-import-sort', '@typescript-eslint'],
  root: true,
  parser: '@typescript-eslint/parser',
  rules: {
    // Auto-sort imports.
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    // Prettier
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    // These are here for better debugging with react tools
    'react/display-name': [
      'error',
      {
        ignoreTranspilerName: true,
        checkContextObjects: true,
      },
    ],
  },
}
