# wx-react-app  
[![node](https://img.shields.io/badge/node-%3E%3D7.9.0-blue.svg)]()
[![npm](https://img.shields.io/badge/npm-%3E%3D4.2.0-green.svg)]()
[![antd](https://img.shields.io/badge/antd-%5E3.2.2-green.svg)]()
[![ant-design-pro](https://img.shields.io/badge/ant--design--pro-%5E1.1.0-green.svg)]()  

使用 [Create-React-App](https://github.com/facebook/create-react-app) + [Ant-Design-Pro](https://github.com/ant-design/ant-design-pro) 框架整合，集合了react-redux、react-router-redux、redux-saga、axios 等。  

## 重要说明

为什么不使用 Ant Design 官方的构建工具进行构建？

1、由于官方构建工具，在 Debug 的时候，无法在源码上进行调试，通过浏览器 Sources 看到的源码是编译后的代码，给调试造成了很大的障碍,所以采用上述方法进行了一下整合。

2、作为一名服务器端开发人员也想了解一下前端的一些框架以及技术，坚信只有通过自己搭建才能够了解使用技术的核心用法。

## 关于装饰器@

由于 Ant Design Pro 里面用到了装饰器，所以这里说一下 Create-React-App 如何支持装饰器？

首先安装 `babel-plugin-transform-decorators-legacy`

`yarn add babel-plugin-transform-decorators-legacy -D`

其次找到 `node_modules/babel-preset-react-app/index.js` ,加入装饰器支持

```

'use strict';

const plugins = [
  // 增加装饰器的支持
 + require.resolve('babel-plugin-transform-decorators-legacy'), 
  // class { handleClick = () => { } }
  require.resolve('babel-plugin-transform-class-properties')
  ....

```
如果有其他的好的方法，请告知，万分感谢！


## 效果gif

![](https://github.com/pythonsir/wx-react-app/blob/master/src/Untitled.gif)

## 项目结构

```
- build                      打包后的项目目录
- config                     webpack配置文件夹
  - jest
  - env.js
  - paths.js
  - polyfills.js
  - webpack.config.dev.js    开发环境配置文件
  - webpack.config.prod.js   生产环境配置文件
  - webpackDevServer.config.js 
- public
  - favicon.ico
  - index.html               主页面
  - mainifest.json
- scripts                    脚本文件夹
  - build.js
  - start.js
  - test.js
- src                        源码文件夹
  - assets                   资源文件夹
  - common
    - menu.js                菜单配置文件
    - router.js              路由配置文件
  - components               组件文件夹
    ...
  - layouts                  布局文件夹
    - BaseLayout.js          后台布局
    - BaseLayout.less
    - UserLayout.js          登录布局
    - UserLayout.less
  - mock                     模拟数据文件夹
    ......
  - redux
    - index.js               所有同步redux的入口
    ......                   
  - routes                   容器组件文件夹
    ......
  - saga                     
    - index.js               异步redux的入口
    ......
  - services
    - api.js                 请求入口
  - store
    - index.js
  - untils                   辅助类
    .....
  index.js
  index.css
  ......
```


## 安装
下载完成后，在项目根目录使用 `npm install` 或者 `yarn install` , 推荐使用 `yarn` 安装。
## 启动
在根目录运行如下命令:  
`yarn start`
