const HtmlWebpackPlugin = require("html-webpack-plugin");
let path = require("path");

module.exports = {
	entry: path.resolve(__dirname, "../src/app.js"),
	output: {
		path: path.resolve(__dirname, "../build"),
		filename: "app.bundle.js"
	},
	plugins: [
		new HtmlWebpackPlugin()
	]
}