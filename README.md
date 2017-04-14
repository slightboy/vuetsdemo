## 准备工作

+ [Node.js](https://nodejs.org) [Dcos](https://nodejs.org/en/docs/)
+ [NPM](https://www.npmjs.com) [Docs](https://docs.npmjs.com/)
+ [TypeScript](http://www.typescriptlang.org) [Docs](http://www.typescriptlang.org/docs/tutorial.html)
+ [Vue.js](https://vuejs.org/) | [CN](https://cn.vuejs.org/) [Docs](https://vuejs.org/v2/guide/) [Examples](https://vuejs.org/v2/examples/)
+ [Element](http://element.eleme.io)

## 工具

+ [VSCode](https://code.visualstudio.com) [Docs](https://code.visualstudio.com/docs)
+ [vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) Code Vue 语法高亮插件
+ [Zeal](https://zealdocs.org)
+ [ALMRUN](https://github.com/chenall/almrun)

## 环境配置


安装 Vue.js 及 cli 工具

```bash
$ npm i vue vue-cli -g
$ vue init webpack src
```

编辑 package.json
删除 babel 相关


安装 TypeScript 及相关组件, 复制 tsconfig.json tslint.json
安装其他依赖组件
```bash
$ npm i typescript@next -g
$ npm link typescript -S
$ npm i
$ npm i vue-class-component ts-loader -D
```

安装 Element UI 包
```bash
$ npm i element-ui -S
```


修改 webpack 配置

build/webpack.base.conf.js

复制 src/sfc.d.ts

以上 Vue 初始化 及 ts 支持 基本完成

## 开始