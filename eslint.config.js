import path from 'path'
import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginPrettier from 'eslint-plugin-prettier'
import oxlint from 'eslint-plugin-oxlint'
import { FlatCompat } from '@eslint/eslintrc'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,vue}']
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      pluginPrettier
    }
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  ...compat.extends('plugin:prettier/recommended', 'prettier', './.eslintrc-auto-import.json'),
  oxlint.configs['flat/recommended'],
  {
    rules: {
      'vue/multi-word-component-names': 0
    }
  },
  // 忽略文件
  {
    ignores: [
      '**/dist',
      './src/main.ts',
      '.vscode',
      '.idea',
      '*.sh',
      '**/node_modules',
      '*.md',
      '*.woff',
      '*.woff',
      '*.ttf',
      'yarn.lock',
      'package-lock.json',
      '/public',
      '/docs',
      '**/output',
      '.husky',
      '.local',
      '/bin',
      'Dockerfile'
    ]
  }
]
