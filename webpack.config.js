const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = {
    mode: "development",
    entry: "./index.tsx",
    output: {
        filename: "bundle.[hash].js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true
    },
    resolve: {
        modules: [__dirname, "node_modules"],
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}