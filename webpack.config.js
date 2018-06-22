let path = require("path");

module.exports = {
	mode: "development",
	devtool: "eval",
	devServer: {
		//contentBase: "./src/",
		port: 4000
	},
	entry: "./src/app.js",
	output: {
		path: path.resolve(__dirname, "./build"),
		filename: "app.bundle.js"
	}
}