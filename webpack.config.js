
const htmlWebpackPlugin = require('html-webpack-plugin');

const htmlPLugin= new htmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html'
})

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [htmlPLugin]
}
