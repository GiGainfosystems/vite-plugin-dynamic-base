## Changelog

### 0.4.9

_2023-04-11_
#### Fix

- 修复html模版src解析 ([#21](https://github.com/chenxch/vite-plugin-dynamic-base/issues/21))

### 0.4.8

_2023-01-15_
#### Fix

- 修复 legacy 资源路径 ([#19](https://github.com/chenxch/vite-plugin-dynamic-base/issues/19) by [@jgsrty](https://github.com/jgsrty))

### 0.4.5

_2022-09-07_
#### Fix

- 支持 异步加载组件.([#14](https://github.com/chenxch/vite-plugin-dynamic-base/issues/14))

### 0.4.4

_2022-06-24_
#### Feat

- 支持 legacy modernPolyfills.([#9](https://github.com/chenxch/vite-plugin-dynamic-base/issues/9))

### 0.4.3

_2022-06-21_
#### Bug fixes

- 修复字符串模板不工作.([#8](https://github.com/chenxch/vite-plugin-dynamic-base/issues/8))

### 0.4.1

_2022-05-09_
#### Bug fixes

- Legacy is invalid in browsers such as IE11.

### 0.4.0

_2022-05-01_

#### 新特性

- 兼容`vite-plugin-pwa`
- base标记

#### Bug 修复

- 多层级cdn引用资源路径修复

#### 重构

- 更换匹配方案，使用base属性作为标记位
- 代码结构调整，引入异步处理


### 0.3.0

_2022-04-23_

#### 新特性

- 添加简单的单元测试 `vitest`. (#5 by @zhoujinfu)

#### Bug 修复

- import.env.LEGACY 未定义的错误. (#5 by @zhoujinfu)