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



## 开发问题记录
1. 部署路径问题
如果代码部署的不是root URL(也就是根域名)，那么package.json中需要配置为 homepage: "."
