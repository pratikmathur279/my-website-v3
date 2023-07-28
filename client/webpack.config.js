import path from "path";
import { fileURLToPath } from "url";
import webpack from "webpack";
import CompressionPlugin from "compression-webpack-plugin";
import DotenvWebpackPlugin from "dotenv-webpack";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var BUILD_DIR = path.resolve(__dirname, "public/javascript");
var APP_DIR = path.resolve(__dirname, "src");

const GLOBALS = {
	"process.env.NODE_ENV": "development",
};

var config = {
	mode: "development",
	devtool: "inline-source-map",
	entry: APP_DIR + "/index.js",
	watch: true,
	output: {
		path: BUILD_DIR,
		filename: "my-website.js",
	},
	plugins: [
		new DotenvWebpackPlugin({
			path: "./.env.local",
		}),
	],
	optimization: {
		minimizer: [
			new webpack.DefinePlugin(GLOBALS),
			new webpack.EnvironmentPlugin({ ...process.env }),
		],
	},

	devServer: {
		historyApiFallback: true,
	},

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
