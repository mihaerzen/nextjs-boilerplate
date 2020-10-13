module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'simple-import-sort'],
  rules: {
    // This is not required when using Next.js.
    'react/react-in-jsx-scope': 'off',
    // Auto-sort imports.
    'simple-import-sort/sort': 'error',
    // We're using TypeScript instead of propTypes.
    'react/prop-types': 'off',
  },
}
