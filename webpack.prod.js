const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new webpack.DefinePlugin({
			'process.env': {
				'API_KEY': JSON.stringify(process.env.API_KEY)
			}
		})
  ]
};
