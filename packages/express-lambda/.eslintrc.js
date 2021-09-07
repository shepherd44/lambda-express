'use strict';

const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {},
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ['prettier'],
  rules: {
    'accessor-pairs': OFF,

    'comma-dangle': [OFF, 'always-multiline'],

    'no-bitwise': OFF,
    'no-inner-declarations': [ERROR, 'functions'],
    'no-restricted-syntax': [ERROR, 'WithStatement'],
    'no-shadow': ERROR,
    'no-unused-expressions': ERROR,
    'no-unused-vars': [
      ERROR,
      {
        args: 'none',
      },
    ],
    'no-use-before-define': OFF,
    'no-useless-concat': OFF,

    // We apply these settings to files that should run on Node.
    // They can't use JSX or ES6 modules, and must be in strict mode.
    // They can, however, use other ES6 features.
    // (Note these rules are overridden later for source files.)
    'no-var': ERROR,
    strict: ERROR,

    // prettier
    'prettier/prettier': 'error',
    indent: OFF,
    'no-multi-spaces': OFF,
  },
};
