module.exports = {
  root: true,
  env : {
    node: true,
  },
  extends: [
    'plugin:vue/strongly-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },

  rules: {
    'no-console'     : process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger'    : process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'quotes': ['error', 'single'],
    // forbid useless extra space
    'no-multi-spaces': [
      'error',
      {
        exceptions: {
          Property            : true,
          VariableDeclarator  : true,
          ImportDeclaration   : true,
          AssignmentExpression: true,
        },
      },
    ],
    // better alignement for const declarations & key/value pair declarations in objects
    'key-spacing': [
      'error',
      {
        singleLine: {
          beforeColon: false,
          afterColon : true,
        },
        multiLine: {
          beforeColon: false,
          afterColon : true,
          align      : 'colon',
        },
      },
    ],
    'keyword-spacing'            : 'error',
    'space-before-function-paren': 'error',
    'comma-dangle'               : ['error', 'always-multiline'],
    'operator-linebreak'         : [2, 'before'],

    // Vue rules
    'vue/script-indent'                    : ['error', 2, { baseIndent: 1 }],
    'vue/no-v-html'                        : 'off',
    'vue/max-attributes-per-line'          : ['error', { singleline: 3 }],
    'vue/attributes-order'                 : 'error',
    'vue/attribute-hyphenation'            : 'error',
    'vue/v-on-function-call'               : 'error',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores                 : ['v-popover'],
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void  : 'always',
          normal: 'never',
        },
      },
    ],
  },

  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
      },
    },
  ],
}
