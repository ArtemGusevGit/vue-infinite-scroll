import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import prettierPlugin from 'eslint-plugin-prettier'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  skipFormatting,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'vue/padding-line-between-blocks': 'error',
      'vue/block-order': [
        'warn',
        {
          order: ['script', 'template', 'style'],
        },
      ],
      'prettier/prettier': [
        'warn',
        {
          vueIndentScriptAndStyle: true,
          singleQuote: true,
          semi: false,
          printWidth: 80,
          endOfLine: 'auto',
        },
      ],
    },
  },
]
