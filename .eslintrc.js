module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
		'no-restricted-imports': 'off',
		'no-tabs': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'no-warning-comments': 'off',
		'spaced-comment': 'off',
		'indent': 'off',
  },
};
