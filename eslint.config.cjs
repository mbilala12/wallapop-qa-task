// eslint.config.cjs
const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const playwright = require('eslint-plugin-playwright');
const prettier = require('eslint-config-prettier');

module.exports = [
  {
    // ✅ don't lint the config file itself and common build outputs
    ignores: ['eslint.config.cjs', 'node_modules/', 'dist/', 'playwright-report/', 'test-results/'],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  playwright.configs['flat/recommended'],
  prettier,

  // you can add project-specific overrides here later if needed
];
