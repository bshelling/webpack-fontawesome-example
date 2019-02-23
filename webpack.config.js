const htmlWebpack = require('html-webpack-plugin');

module.exports = {

    entry: './src/entry.js',
    output:{
        filename: 'bundle.js',
        path: '/dist'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-react']
                    }
                } 
            },
            {
                test: /\.(sass|scss|css)$/,
                use: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins:[
        new htmlWebpack()
    ],
    devServer:{
        port: 9001
    }
}