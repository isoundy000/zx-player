'use strict'
const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
	return path.join(__dirname, dir)
}
module.exports = {
	publicPath: '',
	devServer: {
		hot: true,
		compress: true,
		open: true,
		overlay: {
			warnings: false,
			errors: true
		},
	},
	configureWebpack: {
		resolve: {
			alias: {
				'@': resolve('src')
			}
		},
	},
	css: {
		sourceMap: false
	},
	runtimeCompiler: true,
	productionSourceMap: false
}
