const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/app.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { 
                test: /\.tsx?$/, 
                loader: "ts-loader"
            }, 
            {
                test: /\.tsx?$/, 
                loader: "babel-loader"
            }
        ]
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ]
}