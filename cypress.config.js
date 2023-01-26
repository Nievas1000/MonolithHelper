const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
	env: {
		googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN,
		googleClientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
		googleClientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
		googleClientSecretFail: 'GFGFDSHFSjkf52dloeñghfdspñsopss2c2',
		githubClientId: process.env.REACT_APP_GITHUB_CLIENT_ID,
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
