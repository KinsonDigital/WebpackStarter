const HtmlWebpackPlugin = require("html-webpack-plugin");
let path = require("path");

/*NOTE:
	Paths in webpack configs are relative from the package.json file,
	not the webpack config file
*/

module.exports = {
	entry: "./src/app.js",
	output: {
		path: path.resolve(__dirname, "../build"),
		filename: "app.bundle.js"
	},
	plugins: [
		new HtmlWebpackPlugin()
	]
}