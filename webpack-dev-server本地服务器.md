
# 使用webpack构建本地服务器

## 安装webpack-dev-server

使用webpack-dev-server可以基于node.js构建一个本地服务器.使得浏览器可以监听你的代码修改,
并自动刷新显示修改后的结果.

安装webpack-dev-server:

    npm install webpack-dev-server --save-dev
    
## 构建本地服务器

webpack.config.js中配置devServer选项.

要配置devServer,首先来了解一下devServer对象的配置项:
| devserver的配置选项  |      功能描述      |
|----------|:-------------:|
| contentBase  |  默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）|
| port  |    设置默认监听端口，如果省略，默认为”8080“   |
| inline  | 设置为true，当源文件改变时会自动刷新页面 |
| historyApiFallback  | 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html |

现在来配置webpack.config.js的devServer选项:

```
module.exports = {
    entry:__dirname + '/app/main.js', // 唯一入口文件
    output:{
        path:__dirname + "/public", // 打包后文件存放路径
        filename:"bundle.js" // 打包后输出文件的文件名
    },
    
    devServer:{
        contentBase:"./public", // webpack-dev_server默认会为根文件夹提供本地服务器,如果想为另一个目录下的文件提供本地
                                // 服务器,可以在这里设置其所在目录（这里设置为"public"目录）
        port:8080,  // 设置默认监听端口,如果省略,默认为"8080"
        historyApiFallback:true, // 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true,
                                  // 所有的跳转将指向index.html
        inline:true // 设置为true，当源文件改变时会自动刷新页面
    }
}
```

在package.json的script对添加webpack-dev-server的启动命令（这里配置script的"server"选项）:

```
"scripts": {
    "start": "webpack",
    "server":"webpack-dev-server --open"
  }
```

使用npm run server启动:
```
npm run server
```

> 使用npm run server会自动打开index.html,修改Greet.js文件,会发现页面会立即刷新渲染.