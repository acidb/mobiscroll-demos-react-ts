module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'react-refresh'],
  rules: {
    'arrow-body-style': ['warn', 'as-needed'],
    'import/order': ['warn', { alphabetize: { order: 'asc', caseInsensitive: true } }],
    'no-var': 'warn',
    'one-var': ['warn', 'never'],
    'prefer-arrow-callback': 'warn',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'sort-imports': ['warn', { ignoreCase: true, ignoreDeclarationSort: true }],
  },
};
