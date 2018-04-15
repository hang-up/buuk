module.exports = {
  "extends": [
    "plugin:vue/essential",
    "prettier",
    "eslint:recommended"
  ],
  "plugins": [
    "prettier"
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module",
    "allowImportExportEverywhere": true
  },
  "rules": {
    "prettier/prettier": ["error", {
      "printWidth": 120,
      "singleQuote": true,
      "semi": true,
      "tabWidth": 4
    }]
  }
}
