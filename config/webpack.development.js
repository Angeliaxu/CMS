const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
console.log(__dirname);

module.exports = {
    plugins: [
        // 显示编译结果
        new FriendlyErrorsWebpackPlugin(),
    ],
    devServer: {
        // contentBase: path.join(__dirname, "dist"),
        // 关闭打包详细信息
        quiet: true,
    }
}