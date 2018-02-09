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
    },

    module:{
        rules:[
            {
                test:/(\.jsx|\.js)$/,
                use:{
                    loader:"babel-loader",
                },
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader",
                        options: {
                            modules:true,
                        }
                    }
                ]
            }
        ]
    }
}