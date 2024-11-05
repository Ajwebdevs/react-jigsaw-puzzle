module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:storybook/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12
  },
  plugins: ['react', 'storybook', '@typescript-eslint', 'filename-rules'],
  rules: {
    '@typescript-eslint/no-use-before-define': 'error',
    'filename-rules/match': [2, {
      '.ts': 'kebab-case',
      '.tsx': 'kebab-case'
    }],
    'no-console': ['error'],
    'no-use-before-define': 'off',
    'prefer-arrow-callback': 'error',
    'react/prop-types': 0
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
