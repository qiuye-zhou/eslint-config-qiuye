// 向后兼容的 ESLint 配置
// 这个文件为使用旧版本 ESLint 的项目提供兼容性

module.exports = {
    // 基础配置
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: [
        '@typescript-eslint',
        'unicorn',
        'import'
    ],
    rules: {
        // 代码格式规则
        'indent': 'off', // 关闭 indent 规则，避免与 TypeScript/JSX 冲突
        'quotes': ['error', 'single'],
        'object-curly-spacing': ['error', 'always'],
        'arrow-parens': ['error', 'as-needed'],
        'comma-dangle': ['error', 'never'],
        'semi': ['error', 'never'],

        // 代码质量规则
        'no-param-reassign': 'error',
        'default-case': 'error',
        'consistent-return': 0,
        'no-loop-func': 0,
        'no-undef': 0,
        'no-unused-vars': ['error', {
            'argsIgnorePattern': '^_',
            'varsIgnorePattern': '^_'
        }],

        // 代码风格规则
        'linebreak-style': 0,
        'func-names': 0,
        'no-restricted-syntax': 0,
        'implicit-arrow-linebreak': 0,
        'no-return-await': 0,
        'no-plusplus': 0,
        'no-restricted-globals': 0,
        'no-console': 0,

        // Unicorn 插件规则
        'unicorn/no-keyword-prefix': 0,
        'unicorn/no-null': 0,
        'unicorn/filename-case': [
            'error',
            {
                cases: {
                    kebabCase: true,
                    camelCase: true,
                    pascalCase: true
                }
            }
        ]
    },
    settings: {
        'import/resolver': {
            typescript: true
        }
    },
    overrides: [
        // TypeScript 文件配置
        {
            files: ['**/*.ts', '**/*.tsx'],
            rules: {
                '@typescript-eslint/no-unused-vars': ['error', {
                    'argsIgnorePattern': '^_',
                    'varsIgnorePattern': '^_'
                }]
            }
        },
        // Vue 文件配置
        {
            files: ['**/*.vue'],
            extends: ['plugin:vue/vue3-recommended'],
            parser: 'vue-eslint-parser',
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true
                }
            },
            rules: {
                'vue/multi-word-component-names': 0,
                'vue/html-indent': ['error', 4],
                'vue/html-quotes': ['error', 'double'],
                'vue/max-attributes-per-line': ['error', {
                    singleline: { max: 1 },
                    multiline: { max: 1 }
                }],
                'vue/mustache-interpolation-spacing': ['error', 'always'],
                'vue/no-boolean-default': ['error', 'default-false'],
                'vue/no-empty-component-block': 'error',
                'vue/no-reserved-component-names': 'error',
                'vue/no-static-inline-styles': 'error',
                'vue/no-template-key': 'error',
                'vue/no-template-shadow': 'error',
                'vue/no-unused-refs': 'error',
                'vue/no-useless-mustaches': 'error',
                'vue/no-useless-v-bind': 'error',
                'vue/padding-line-between-blocks': ['error', 'always'],
                'vue/prefer-true-attribute-shorthand': 'error',
                'vue/require-direct-export': 'error',
                'vue/require-name-property': 'error',
                'vue/v-for-delimiter-style': ['error', 'in'],
                'vue/html-self-closing': ['error', {
                    html: {
                        void: 'always',
                        normal: 'always',
                        component: 'always'
                    },
                    svg: 'always',
                    math: 'always'
                }],
                'vue/multiline-html-element-content-newline': 'off',
                'vue/singleline-html-element-content-newline': 'off',
                'vue/html-closing-bracket-newline': ['error', {
                    singleline: 'never',
                    multiline: 'always'
                }],
                'vue/html-closing-bracket-spacing': ['error', {
                    startTag: 'never',
                    endTag: 'never',
                    selfClosingTag: 'always'
                }],
                'vue/block-order': ['error', {
                    order: ['script', 'template', 'style']
                }]
            }
        },
        // ESLint 配置文件
        {
            files: ['.eslintrc.js', 'eslint.config.js'],
            rules: {
                'unicorn/prefer-module': 0
            }
        }
    ]
}