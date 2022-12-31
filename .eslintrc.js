const {resolve} = require("path");

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb', 'airbnb-typescript', 'prettier', 'next/core-web-vitals'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: resolve(`${__dirname}/tsconfig.json`),
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'simple-import-sort'],
  rules: {
    // This is not required when using Next.js.
    'react/react-in-jsx-scope': 'off',
    // Auto-sort imports.
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    // We're using TypeScript instead of propTypes.
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
