const { defineConfig } = require('cypress');
const awsmobile = require('./src/aws-exports');
require('dotenv').config();

module.exports = defineConfig({
	env: {
		cognito_username: process.env.AWS_COGNITO_USERNAME,
		cognito_password: process.env.AWS_COGNITO_PASSWORD,
		awsUserPoolId: process.env.AWS_USER_POOLS_ID,
		awsClientId: process.env.AWS_USER_POOLS_WEB_CLIENT_ID,
		awsConfig: awsmobile.default,
		googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN,
		googleClientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
		googleClientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
	},

	e2e: {
		setupNodeEvents(on, config) {
			on('task', {
				log(message) {
					console.log(message);

					return null;
				},
			});
		},
	},

	defaultCommandTimeout: 10000,

	video: false,
});
