let path = require("path");

module.exports = {
	mode: "development",
	devtool: "source-map",
	entry: "./src/app.js",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "app.bundle.js"
	},
	devServer: {
		port: 3000
	}
}