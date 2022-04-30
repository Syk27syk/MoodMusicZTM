module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'space-before-function-paren': 0,
    'vue/singleline-html-element-content-newline': 'off',
    "vue/require-prop-types": "off",
    "vue/html-indent": "off",
    "vue/html-closing-bracket-newline": "off",
    "comma-dangle": ["off"],
    "semi":["off"],
    "vue/multi-word-component-names": [
      "off",
      {
        "ignores": ["index", "about", "contacts"]
      }
    ],
      "vue/html-self-closing": ["error", {
        "html": {
          "void": "any",
          "normal": "always",
          "component": "always"
        },
        "svg": "always",
        "math": "always"
      }],
    "linebreak-style": 0,
  }
}
