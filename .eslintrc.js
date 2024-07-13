module.exports = {
  plugins: ['import'],
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    'no-debugger': 'off',
    'no-console': 0,
    'class-methods-use-this': 'off',
    'import/prefer-default-export': ['off', 'single'],
  },
  noInlineConfig: true,
  ignorePatterns: [
    '.eslintrc.js',
    'webpack.config.js',
    'webpack.dev.config.js',
    'webpack.prod.config.js',
  ],
};
