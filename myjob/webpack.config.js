module.exports = {
    entry: "js/src.js",
    output: {
        path: __dirname,
        filename: "js/app.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};