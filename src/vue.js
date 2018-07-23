const path = require('path');

module.exports = {
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    parser: 'babel-eslint'
  },
  'extends': [
    'plugin:vue/recommended',
    path.join(__dirname, 'index.js')
  ],
  'env': {
    browser: true
  },
  'rules': {
    'vue/html-ident': ['error', 2],
    'vue/attributes-hyphenation': 0
  }
};
