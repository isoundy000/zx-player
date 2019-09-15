module.exports = {
  "globals": {
    "$": true,
    "byuiBaseUrl": true,
    "ckplayer": true,
    "byui": true,
    "mapv": true,
    "maptalks": true,
    "echarts": true
  },
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jquery: true
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "rules": {
    "vue/this-in-template": 0,
    "vue/no-template-shadow": 0,
    "use-isnan": 0,
    "vue/no-unused-vars": 0, //禁止未使用过的变量
    "no-mixed-spaces-and-tabs": 0, //禁止使用 空格 和 tab 混合缩进
    "no-multiple-empty-lines": 0, // 不允许多个空行
    "space-in-parens": 0,
    "no-irregular-whitespace": 0, //空格报错检查
    "generator-star-spacing": 0,
    "no-mixed-operators": 0,
    "vue/max-attributes-per-line": 0,
    "no-debugger": 0, //debugger;
    "new-cap": 0, //函数大小写;
    "indent": 0, //缩进一致
    "no-unused-vars": 0, //允许存在未使用的变量或函数参数;
    "space-before-function-paren": 0, //括号前后空格不需一致;
    "key-spacing": 0,
    "vue/no-reserved-keys": 0,
    "vue/attribute-hyphenation": 0,
    "vue/html-self-closing": 0,
    "vue/component-name-in-template-casing": 0,
    "vue/html-closing-bracket-spacing": 0,
    "vue/singleline-html-element-content-newline": 0,
    "vue/no-unused-components": 0,
    "vue/multiline-html-element-content-newline": 0,
    "vue/no-use-v-if-with-v-for": 0,
    "vue/html-closing-bracket-newline": 0,
    "vue/no-parsing-error": 0,
    "no-console": 0,
    "no-tabs": 0,
    "no-multi-spaces": 0,
    "properties": 0,
    "quotes": [
      2,
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "semi": [
      0,
      "never",
      {
        "beforeStatementContinuationChars": "never"
      }
    ],
    "no-delete-var": 2,
    "prefer-const": [
      2,
      {
        "ignoreReadBeforeAssign": false
      }
    ]
  }

}
