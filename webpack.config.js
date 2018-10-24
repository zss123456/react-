
const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';



module.exports = {

	// 入口文件
	entry: './src/app.jsx',

	// 打包文件输出
	output: {
		path: path.resolve(__dirname,'dist'),
		publicPath: '/dist/',
		filename: 'js/app.js'
	},

	module: {
		rules: [

			// 加载.js和.jsx文件
			{
				test: /\.(jsx|js)$/,
	      		exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env','react']
					}
				}
			},

			// 加载样式文件
			{
				test: /\.(sc|sa|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
			            options: {
			              publicPath: '../'
			            }
			        },	
		            "css-loader",
		            // "postcss-loader",
		            "sass-loader"
				]
			},

			// 加载图片资源
			{
		        test: /\.(png|jpg|gif)$/,
		        use: [
			        {
					    loader: 'file-loader',
					    options: {
					    	//emitFile: true,
					    	name: '[name].[ext]',
					    	outputPath: 'images/'
					    }
					}
		        ]
	        },

			// 加载字体图标
	        {
		        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
		        use: [
			        {
			        	loader: 'file-loader',
			        	options: {
			        		name: '[name].[ext]',
					    	outputPath: 'images/'
					    }
					}
		        ]
	        }
		],
	},

	// 提出公共模块
	optimization: { 
		splitChunks: { 
			cacheGroups: { 
				commons: { 
					name: "commons", 
					chunks: "initial", 
					minChunks: 2 
				} 
			} 
		} 
	},
	
	plugins: [

		// 处理html文件
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html'
		}),

		// 分离CSS文件
		new MiniCssExtractPlugin({

			filename: 'css/[name].css'
		}),

		new webpack.HotModuleReplacementPlugin({
		  // Options...
		})
	],


	devServer: {
	    contentBase: path.resolve(__dirname, 'dist'),
	    watchContentBase: true,
	    port: 9000,
	    publicPath: '/dist/',
        inline: true,
        hot: true,
        open: true
    }
}