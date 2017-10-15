const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'bin'),
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
                    presets: ['es2015', 'react']
                },
				exclude: [
					/bower_components/, 
					/node_modules/
				]
			}
		]
	},
	resolve: {
        modules: [
			"web_modules",
			"node_modules", 
			"bower_components"
		],
		descriptionFiles: ['bower.json']
    }
}; 