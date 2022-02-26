/*
 * @Author: your name
 * @Date: 2022-02-09 15:39:42
 * @LastEditTime: 2022-02-09 17:07:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ts\demo1\chapter3\webpack.config.js
 */
// 引入一个包 用于拼接路径
const path = require('path');

// 引入html插件 自动引入我们的打包后的js文件
const HTMLWebpackPlugin = require('html-webpack-plugin');

// 引入clean 插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

//webpack 的所有配置信息 都应该写在module.exports中
module.exports = {
    // 指定入口文件
    entry: './src/index.ts',

    // 指定打包后的目录
    output: {
        //打包文件所在的目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后的文件名
        filename: "bundle.js",

        // 告诉webpack打包时 不使用箭头函数
        environment: {
            arrowFunction: false
        }
    },

    //指定webpack 打包时要使用的模块 
    module: {
        // 加载的规则
        rules: [{
            // test 指定是规则生效的文件 ( 匹配到的 )
            test: /\.ts$/,

            //使用的loader
            use: [
                // 配置loader
                {
                    // 指定加载器 ( 配置选项多 )  
                    loader: "babel-loader",
                    // 设置babel
                    options: {
                        // 设置预定义的环境
                        presets: [
                            [
                                // 指定环境的插件
                                "@babel/preset-env",
                                // 配置信息
                                {
                                    // 要兼容的目标浏览器
                                    targets: {
                                        "chrome": '58',
                                        "ie": "11"
                                    },

                                    // 指定core-js 的版本
                                    "corejs": "3",

                                    //使用core-js的方式 "usage" 表示按需加载
                                    "useBuiltIns": "usage"
                                }
                            ]
                        ]
                    }
                },
                "ts-loader"
            ],

            // 要排除的文件
            exclude: /node_modules/,
        }]
    },

    // 配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({

            // title: '自定义的title',

            // 提供一个模板 引入什么的工作自动完成
            template: './src/index.html'
        }),
    ],

    // 用来设置引用的模块 哪些文件可以被引用
    resolve: {
        extensions: ['.ts', '.js']
    }
}