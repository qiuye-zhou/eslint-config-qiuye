# eslint-config-qiuye

一个全面的 ESLint 配置包，支持 JavaScript、TypeScript、JSX、TSX 和 Vue 项目。

## 特性

- ✅ 支持 JavaScript、TypeScript、JSX、TSX、Vue 文件
- ✅ 使用 ESLint 9 Flat Config 格式
- ✅ 向后兼容旧版本 ESLint 配置
- ✅ 包含代码质量、格式化和最佳实践规则
- ✅ 支持 TypeScript 和 Vue 3
- ✅ 可配置的缩进和代码风格

## 安装

```bash
# npm
npm install -D eslint-config-qiuye

# yarn
yarn add -D eslint-config-qiuye

# pnpm
pnpm add -D eslint-config-qiuye
```

## 使用方法

### ESLint 9+ (推荐)

在你的 `eslint.config.js` 文件中：

```javascript
import qiuyeConfig from 'eslint-config-qiuye'

export default [
    ...qiuyeConfig
]
```

### 旧版本 ESLint (向后兼容)

在你的 `.eslintrc.js` 或 `.eslintrc.json` 文件中：

```javascript
module.exports = {
    extends: ['qiuye']
}
```

## 支持的规则

### 代码格式
- 单引号 (`'`)
- 无分号
- 无尾随逗号
- 对象大括号内需要空格
- 箭头函数参数按需使用括号

### 代码质量
- 禁止重新分配函数参数
- switch 语句必须有 default 分支
- 未使用变量检查（支持下划线前缀忽略）

### 文件类型支持
- **JavaScript/TypeScript**: `.js`, `.ts`, `.mjs`, `.cjs`
- **React**: `.jsx`, `.tsx`
- **Vue**: `.vue`

### 插件支持
- `@typescript-eslint` - TypeScript 支持
- `eslint-plugin-unicorn` - 代码质量规则
- `eslint-plugin-import` - 导入/导出规则
- `eslint-plugin-vue` - Vue 支持

## 配置示例

### 基础项目
```javascript
// eslint.config.js
import qiuyeConfig from 'eslint-config-qiuye'

export default [
    ...qiuyeConfig
]
```

### 自定义配置
```javascript
// eslint.config.js
import qiuyeConfig from 'eslint-config-qiuye'

export default [
    ...qiuyeConfig,
    {
        rules: {
            // 你的自定义规则
            'no-console': 'warn'
        }
    }
]
```

## 版本要求

- Node.js >= 18.0.0
- ESLint >= 9.0.0

## 许可证

MIT
