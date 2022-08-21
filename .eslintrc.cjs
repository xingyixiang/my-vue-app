module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    // Ref sugar (take 2)
    $: "readonly",
    $$: "readonly",
    $ref: "readonly",
    $shallowRef: "readonly",
    $computed: "readonly",

    // index.d.ts
    // global.d.ts
    Fn: "readonly",
    PromiseFn: "readonly",
    RefType: "readonly",
    LabelValueOptions: "readonly",
    EmitType: "readonly",
    TargetContext: "readonly",
    ComponentElRef: "readonly",
    ComponentRef: "readonly",
    ElRef: "readonly",
    global: "readonly",
    ForDataType: "readonly",
    ComponentRoutes: "readonly",

    // script setup
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly"
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/eslint-config-typescript',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.vue'],
      rules: {
        'no-undef': 'off',
      },
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-explicit-any': 'off', // any
    'no-debugger': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off', // setup()
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-param-reassign': ['error', { props: false }],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
    'import/extensions': [0, 'never'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-unresolved': [2, { ignore: ['unplugin-element-plus'] }],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        trailingComma: 'es5',
        singleQuote: true,
        parser: 'flow',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      },
      alias: {
        map: [
          ['@', './src'], // 别名路径
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      },
    },
  },
};
