module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  // Reglas incluidas para adaptar ESLint a mi estilo respecto a 'standard'
  rules: {
    'no-tabs': 0,
    semi: 0,
    quotes: [0]
  }
}
