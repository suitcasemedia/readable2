module.exports = {
  extends: ['airbnb', 'plugin:flowtype/recommended'],
  plugins: ['flowtype', 'cypress'],
  env: {
    browser: true,
    jest: true,
    'cypress/globals': true,
  },
  globals: {
    __webpack_hash__: true,
  },
  rules: {
    'max-len': [
      2,
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
      },
    ],
    'function-paren-newline': ['error', 'consistent'],
    'react/prop-types': 0,
    'arrow-parens': 0,
    'no-unused-expressions': [2, { "allowShortCircuit": true, "allowTernary": false }],
    'no-mixed-operators': ["error", {"allowSamePrecedence": true}],
    'object-curly-newline': 0,
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['label'],
        required: {
          some: ['nesting', 'id'],
        },
        allowChildren: false,
      },
    ],
    // We aren't guaranteed to be fully keyboard operated
    'jsx-a11y/click-events-have-key-events': 0,
  },
};
