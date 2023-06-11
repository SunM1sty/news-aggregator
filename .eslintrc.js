module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'class-methods-use-this': 'off',
    'default-case': 'off',
    'array-callback-return': 'off',
    'consistent-return': 'off',
    'no-console': [
      2,
      {
        allow: ['info', 'warn', 'error']
      }
    ],
    'max-len': [
      'error',
      {
        code: 100,
        ignoreUrls: true,
        ignoreRegExpLiterals: true
      }
    ]
  }
}
