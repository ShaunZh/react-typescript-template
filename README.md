# 该项目为react typescript搭建的功能


## 功能列表
- ESlint：ESLint使用的规则是[AlloyTeam的ESLint规则](https://github.com/AlloyTeam/eslint-config-alloy#typescript-react)，ESLint主要检查ts的语法错误，不进行语法样式的检查， 语法样式检查使用prettier，需要在vscode中安装prettier插件，prettier在vscode中的配置很重要，否则很有可能会导致格式化不生效，尤其是对于typescript，必须选择正确的格式化配置，参考[vscode prettier配置](https://prettier.io/docs/en/editors.html#visual-studio-code)
- UI 库：使用的是antd-mobile，同时，通过babel-plugin-import按需加载的方式引入
- 使用react-app-rewired修改create-react-app的默认配置，需要搭配customize-cra一起使用
- react + redux的文件组织结构
  - [Ducks-modular-redux](https://www.lovesofttech.com/react/reactReduxDirectoryStructure/)
  - [React + Redux工程目录结构最佳实践](https://github.com/erikras/ducks-modular-redux)
- webpack别名和typescript别名支持，主要分成两步实现，参考[typescript + webpack别名配置](https://www.jianshu.com/p/6f8a98a9f2e2)
  1. webpack别名：通过[customize-cra](https://github.com/arackaf/customize-cra)来设置webpack别名，也就是在config-overrides.js中进行配置
  2. typescript别名：在tsconfi.json中通过设置extends来实现
- 如果要在项目工程添加或修改功能，可以先查看[create-react-app文档](https://create-react-app.dev/docs/documentation-intro)中是否有相关的功能
- [设置环境变量](https://create-react-app.dev/docs/adding-custom-environment-variables/)
- [设置开发环境的http请求代理](https://create-react-app.dev/docs/proxying-api-requests-in-development/)
- ~~使用[redux-thunk](https://github.com/reduxjs/redux-thunk)中间件来实现redux异步操作，[redux-thunk typescript实现](https://github.com/reduxjs/redux-thunk/blob/master/test/typescript.ts)，参考:[Typescript with Redux, & Redux-Thunk Recipe](https://medium.com/@peatiscoding/typescripts-with-redux-redux-thunk-recipe-fcce4ffca405)，需要注意的是redux-chunk的typescript编写方法~~
- 使用[redux-observable](https://redux-observable.js.org/)和[rxjs](https://rxjs.dev/api/index/function/from)作为异步处理
- 使用[typesafe-actions中间件](https://github.com/piotrwitek/typesafe-actions#constants)
- vscode安装vscode-styled-components插件，用于styled-components样式检查

## 开发问题记录
1. 部署路径问题
如果代码部署的不是root URL(也就是根域名)，那么package.json中需要配置为 homepage: "."
2. 尽量不要使用[React.FunctionCompnent(或者React.FC)](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)

## TODO
- stylelint对样式进行检查，需要分成两步，一、对styled-components进行style样式检查，二、对css、scss进行样式检查