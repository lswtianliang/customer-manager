## 项目简介

- _此处省略....(简单描述该项目名称、描述、功能概览，由该项目前端开发者覆盖填写)_

## 安装

- yarn

## 本地启动

- yarn start，在浏览器中访问 [localhost:3000](http://localhost:3000/)
- 如果有后端服务请求，请到根目录下的 config 文件夹的 configs 的 apiProxies 里面更改后端服务地址

## 发布构建

- 需要使用`Jenkins`构建发布

_关于 vendor_

我们的基础架构会将不常更改的三方库，例如 react、react-dom、redux  react-redux, react-router-dom, classnames（配置`scripts/vendor.js`），打包到 vendor 目录（`vendor`）中。在代码中无需再引入，可分别通过 React、 ReactDOM、 Redux、 ReactRedux、 ReactRouterDOM、 cls直接使用。

没有特殊情况，不要私自向 package.json 中添加三方依赖

## 技术栈

typescript+react+redux+single-spa+webpack+babel+eslint+jenkins

## 模板代码目录结构说明

各目录以实际项目为准，以下为常用目录：

- assets 为静态资源目录，有 images、styles、fonts 等。

- components 为通用组件目录。

- constants 为常量目录。

- containers 为容器组件目录。

- pages 为各模块主目录，各模块下可以有业务组件、业务常量等。

- redux 为状态管理的目录，有 actions、reducers 和 store 目录。

- services 为接口的目录。

- utils 为工具函数。

- models 为复杂数据初始化目录。

## 前端相关技术文档及规范：

- [前端编码规范](http://doc.seeyona9.com/pages/viewpage.action?pageId=2397519)
