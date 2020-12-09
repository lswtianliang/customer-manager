## 项目简介

- 主要使用react+redux的技术，实现一个客户管理系统demo的CRUD操作。
- 代码主要目的是为了演示架构思想，具体代码没有深入优化。

## 架构说明

- 采用领域模型，极简设计，高内聚低耦合的架构设计。
- 文件夹组织采用扁平化思路，少用文件夹，避免嵌套层次过深，相关代码放在一起，修改代码时不用到处找目录。
- redux中的相关的 action 和 reducer放在一起文件中，拆分复杂度，适合多人开发统一个页面的不同function。
- 约定大于配置。

## 安装

- yarn

## 本地启动

- yarn start，在浏览器中访问 [localhost:3000](http://localhost:3000/)


## 技术栈

typescript+react+redux+webpack+babel+eslint

## 模板代码目录结构说明

各目录以实际项目为准，以下为常用目录：

- assets 为静态资源目录，有 images、styles、fonts 等。

- components 主要是为了遵从react一切皆组件的理念，它类似领域设计容器。

- redux 为状态管理的目录

- services 为调用graphQL接口的目录。

- utils 为工具函数。

