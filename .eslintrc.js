module.exports = {
	env: {
		browser: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'standard',
		'plugin:cypress/recommended',
		'eslint-config-prettier',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'cypress'],
	rules: {
		'react/prop-types': 'off',
		curly: ['error', 'all'],
		camelcase: 'off',
	},
};
