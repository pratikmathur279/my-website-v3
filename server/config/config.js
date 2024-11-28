// config file with third party providers credentials

import dotenv from "dotenv";

dotenv.config();

const config = {
	name: process.env.APP_NAME,
	env: process.env.APP_ENV,
	debug: process.env.APP_DEBUG,
	url: process.env.APP_URL,
	timezone: process.env.APP_TIMEZONE,

	beta: {
		is_beta: process.env.APP_BETA,
	},

	aws: {
		aws_access_key_id: process.env.AWS_ACCESS_KEY_ID,
		aws_secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
		aws_region: process.env.AWS_REGION,
		aws_lambda_url: process.env.AWS_LAMBDA_URL,
		aws_credit: process.env.AWS_CREDIT,
	},
};

export default config;
