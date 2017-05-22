const path = require('path'); // NEEDED FOR USING INSTALLED WEBPACK MODULE CORRECTLY

module.exports = {
	entry: "./app/assets/scripts/app.js",
	output: {
		path: path.resolve(__dirname, "./app/temp/scripts"),
		filename: "app.js"
	}
}