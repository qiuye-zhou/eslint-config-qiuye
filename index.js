// eslint-disable-next-line unicorn/prefer-module
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:unicorn/all',
        'airbnb-base/legacy'
    ],
    overrides: [
        {
            files: '*.vue',
            parser: 'vue-eslint-parser',
            extends: ['plugin:vue/vue3-recommended'],
            rules: {
                'vue/multi-word-component-names': 0,
                'vue/html-indent': ['error', 4]
            }
        },
        {
            files: '*.test.ts',
            rules: {
                'no-loop-func': 0,
                'no-undef': 0
            }
        },
        {
            files: '.eslintrc.js',
            rules: {
                'unicorn/prefer-module': 0
            }
        }
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],
    rules: {
        indent: ['error', 4],
        quotes: ['error', 'single'],
        'object-curly-spacing': ['error', 'always'],
        'arrow-parens': ['error', 'as-needed'],
        'comma-dangle': ['error', 'never'],
        'no-param-reassign': 'error',
        'default-case': 'error',
        'consistent-return': 0,
        'linebreak-style': 0,
        'unicorn/no-keyword-prefix': 0,
        'func-names': 0,
        'no-restricted-syntax': 0,
        'implicit-arrow-linebreak': 0,
        'no-return-await': 0,
        'no-plusplus': 0,
        'unicorn/no-null': 0,
        'no-restricted-globals': 0,
        'no-console': 0,
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
    }
};
