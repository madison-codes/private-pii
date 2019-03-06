const path = require("path");
module.exports = {
    entry: path.join(__dirname, "src", "index.jsx"),
    devServer: {
        contentBase: path.join(__dirname, "src")
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "build.js"
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                include: [/src/, /node_modules/]
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.json$/,
                loader: "json-loader",
                include: "/build/contracts/"
            }
        ]
    }
};