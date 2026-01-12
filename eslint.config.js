import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'prettier': eslintPluginPrettierRecommended.plugins.prettier
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.strictTypeChecked.rules,
      ...reactHooks.configs['recommended-latest'].rules,
      ...reactRefresh.configs.vite.rules,
      ...eslintPluginPrettierRecommended.rules,
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error"]
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);