// ESLint 配置依赖导入
import js from '@eslint/js' // ESLint 基础规则
import typescriptEslint from '@typescript-eslint/eslint-plugin' // TypeScript ESLint 插件
import typescriptParser from '@typescript-eslint/parser' // TypeScript 解析器
import unicorn from 'eslint-plugin-unicorn' // Unicorn 插件（代码质量规则）
import importPlugin from 'eslint-plugin-import' // Import 插件
import vueParser from 'vue-eslint-parser' // Vue 解析器
import globals from 'globals' // 全局变量定义

// ESLint 9 Flat Config 配置
export default [
    // 基础配置 - 适用于所有文件类型
    {
        files: ['**/*.{js,ts,mjs,cjs,jsx,tsx,vue}'], // 匹配所有 JavaScript/TypeScript 文件
        languageOptions: {
            ecmaVersion: 'latest', // 使用最新的 ECMAScript 版本
            sourceType: 'module', // 使用 ES 模块
            globals: {
                ...globals.browser, // 浏览器全局变量
                ...globals.node, // Node.js 全局变量
                ...globals.es2021 // ES2021 全局变量
            },
            parser: typescriptParser, // 使用 TypeScript 解析器
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true // 启用 JSX 支持
                }
            }
        },
        plugins: {
            '@typescript-eslint': typescriptEslint, // TypeScript 规则
            'unicorn': unicorn, // 代码质量规则
            'import': importPlugin // 导入/导出规则
        },
        rules: {
            // ESLint 推荐规则
            ...js.configs.recommended.rules,

            // 代码格式规则
            'indent': 'off', // 关闭基础 indent 规则，避免与 TypeScript/JSX 冲突
            'quotes': ['error', 'single'], // 使用单引号
            'object-curly-spacing': ['error', 'always'], // 对象大括号内需要空格
            'arrow-parens': ['error', 'as-needed'], // 箭头函数参数按需使用括号
            'comma-dangle': ['error', 'never'], // 禁止尾随逗号
            'semi': ['error', 'never'], // 不要求分号

            // 代码质量规则
            'no-param-reassign': 'error', // 禁止重新分配函数参数
            'default-case': 'error', // switch语句必须有default分支
            'consistent-return': 0, // 允许不一致的return语句
            'no-loop-func': 0, // 允许在循环中定义函数
            'no-undef': 0, // 允许未定义的变量
            'no-unused-vars': ['error', {
                'argsIgnorePattern': '^_', // 忽略以下划线开头的参数
                'varsIgnorePattern': '^_' // 忽略以下划线开头的变量
            }],

            // 代码风格规则
            'linebreak-style': 0, // 不限制换行符风格
            'func-names': 0, // 允许匿名函数
            'no-restricted-syntax': 0, // 不限制特定语法
            'implicit-arrow-linebreak': 0, // 不限制箭头函数换行
            'no-return-await': 0, // 允许return await
            'no-plusplus': 0, // 允许++和--操作符
            'no-restricted-globals': 0, // 不限制全局变量
            'no-console': 0, // 允许console语句

            // Unicorn 插件规则
            'unicorn/no-keyword-prefix': 0, // 允许关键字前缀
            'unicorn/no-null': 0, // 允许使用null
            'unicorn/filename-case': [ // 文件名大小写规则
                'error',
                {
                    cases: {
                        kebabCase: true, // 允许kebab-case
                        camelCase: true, // 允许camelCase
                        pascalCase: true // 允许PascalCase
                    }
                }
            ]



        },
        settings: {
            'import/resolver': {
                typescript: true
            }
        }
    },

    // Vue 文件特殊配置（需要 Vue 解析器）
    {
        files: ['**/*.vue'], // 匹配所有.vue文件
        languageOptions: {
            parser: vueParser, // 使用Vue解析器
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true // 启用 JSX 支持（Vue 3 支持 JSX）
                }
            }
        }
    },

    // ESLint 配置文件
    {
        files: ['.eslintrc.js', 'eslint.config.js'], // 匹配ESLint配置文件
        rules: {
            'unicorn/prefer-module': 0 // 允许使用require而不是import
        }
    }
]
