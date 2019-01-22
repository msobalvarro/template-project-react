const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	resolve: {
		extensions: ['.js', '.jsx', '.styl', '.css'] // Archivos que soportará webpack
	},
	entry: ['babel-polyfill', './static/dev/app.main.js'],
	mode: 'production',
	// mode: 'development',
	devServer: {
		port: 9000,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ["react", "es2015", "es2017", "stage-0"],
					}
				}
			},
			{
				test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 1000000,
					}
				}
			},
			{
				test: /\.(styl|css)$/,
				use: ExtractTextPlugin.extract({
					use: [
						'css-loader',
						{
							loader: 'stylus-loader',
							options: {
								minimize: true,
								use: [
									require('nib'),
									require('rupture')
								],
								import: [
									'~nib/lib/nib/index.styl',
									'~rupture/rupture/index.styl'
								]
							}
						}
					]
				})
			}
		]
	},
	output: {
		path: path.resolve(__dirname + '/static/js'),
		filename: 'script.js'
	},
	plugins: [new ExtractTextPlugin("../css/[name].css")]

}