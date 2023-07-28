import path from "path";
import { fileURLToPath } from "url";
import webpack from "webpack";
import CompressionPlugin from "compression-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import DotenvWebpackPlugin from "dotenv-webpack";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var BUILD_DIR = path.resolve(__dirname, "public/javascript");
var APP_DIR = path.resolve(__dirname, "src");

const GLOBALS = {
	"process.env.NODE_ENV": "production",
};

var config = {
	mode: "production",
	devtool: "nosources-source-map",
	entry: APP_DIR + "/index.js",
	output: {
		path: BUILD_DIR,
		filename: "my-website.js",
		publicPath: "/",
	},
	stats: "errors-only",
	optimization: {
		minimizer: [
			new webpack.DefinePlugin(GLOBALS),
			new webpack.EnvironmentPlugin({ ...process.env }),
		],
		splitChunks: {
			chunks: "async",
			minSize: 20000,
			minRemainingSize: 0,
			minChunks: 1,
			maxAsyncRequests: 30,
			maxInitialRequests: 30,
			enforceSizeThreshold: 50000,
			cacheGroups: {
				defaultVendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
					reuseExistingChunk: true,
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true,
				},
			},
		},
	},

	plugins: [
		new CompressionPlugin({
			algorithm: "gzip",
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0.1,
		}),
		// new DotenvWebpackPlugin({
		// 	path: "./.env.production",
		// }),
	],

	module: {
		rules: [
			{
				test: /\.js?/,
				include: APP_DIR,
				use: {
					loader: "babel-loader",
					options: {
						presets: [["@babel/preset-react", { modules: false }]],
					},
				},
				resolve: {
					fullySpecified: false,
				},
				exclude: /node_modules/,
			},
			{
				test: /\.([cm]?ts|tsx)$/,
				loader: "ts-loader",
				resolve: {
					fullySpecified: false,
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: "babel-loader",
					},
					{
						loader: "react-svg-loader",
						options: {
							jsx: true, // true outputs JSX tags
						},
					},
				],
			},
		],
	},
};

export default config;
