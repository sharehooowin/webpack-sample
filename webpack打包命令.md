#webpack打包方式

## 1、命令行通过webpack命令指定入口文件和输出路径

格式：**webpack {entyr file} {output file}**

```
> wbepack app/main.js public/bundle.js
```
指定入口文件之后，webpack将自动识别项目所依赖的其他文件。
不过需要注意的是上面这种写法webpack必须是全局安装的。

如果webpack不是全局安装的，需要额外指定node_modules中webpack的位置:
```javascript
> node_modules/.bin/webpack app/main.js public/bundle.js
```

## 2、使用webpack命令,根据webpack.config.js配置信息进行打包

在项目根目录下新建webpack.config.js文件，在里面编写配置信息，这里只涉及简单的入口文件路径
和打包后文件的存放路径:

```
module.exports = {
    entry:__dirname + '/app/main.js', // 唯一入口文件
    output:{
        path:__dirname + "/public", // 打包后文件存放路径
        filename:"bundle.js" // 打包后输出文件的文件名
    }
}
```

> __dirname：node.js中的一个全局标量,表示当前脚本所在的目录位置

> 完成上面的操作,这时在终端执行webpack命令,会找到webpack.config.js配置文件并根据它的信息进行打包..
执行webpack命令后,就可以查看对应的打包后的文件输出路径是否有文件输出了.

## 3、通过npm命令

如果想使用npm统一接口来启动webpack命令打包。
可以通过配置package.json中script的相关字段来实现（这里配置start字段）

```
{
    "name":"webpack-sample",
    "version":"1.0.0",
    "description": "webpack priject sample",
    "main": "index.js",
    "script":{
        "start":"webpack",
    }
}
```

> 完成上面的配置,执行npm run start或者npm start命令,就相当于执行了webpack命令.
这样就会找到webpack.config.js配置文件并根据它的信息进行打包..


