/** @type {import("eslint").Linter.Config} */
const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: __dirname,
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'tailwindcss'],
  extends: [
    'next/core-web-vitals',
    'plugin:deprecation/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'prettier',
    'plugin:tailwindcss/recommended',
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-ignore': true,
        'ts-nocheck': false, // ✅ Allow @ts-nocheck
        'ts-check': true,
        'ts-expect-error': true,
      },
    ],
    'jsx-a11y/heading-has-content': 'off',
  },
  settings: {
    tailwindcss: {
      callees: ['cn', 'cva'],
      config: './tailwind.config.ts',
      classRegex: '^(class(Name)?|tw)$',
    },
    next: {
      rootDir: ['./'],
    },
  },
};

module.exports = config;
