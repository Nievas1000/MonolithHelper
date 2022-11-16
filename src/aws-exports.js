/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.
const awsmobile = {
	aws_project_region: process.env.REACT_APP_AWS_PROJECT_REGION,
	aws_cognito_identity_pool_id:
		'us-east-1:c41c1816-3d57-44d9-a17c-c90a8d177e2c',
	aws_cognito_region: process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID,
	aws_user_pools_id: process.env.REACT_APP_AWS_USER_POOLS_ID,
	aws_user_pools_web_client_id:
		process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID,
	oauth: {
		domain: process.env.AWS_DOMAIN,
		scope: [
			'phone',
			'email',
			'openid',
			'profile',
			'aws.cognito.signin.user.admin',
		],
		redirectSignIn: process.env.REACT_APP_AWS_REDIRECT,
		redirectSignOut: process.env.REACT_APP_AWS_REDIRECT,
		responseType: 'code',
	},
	federationTarget: 'COGNITO_USER_POOLS',
	aws_cognito_username_attributes: ['EMAIL'],
	aws_cognito_social_providers: ['GOOGLE'],
	aws_cognito_signup_attributes: ['EMAIL', 'FAMILY_NAME', 'NAME'],
	aws_cognito_mfa_configuration: 'OFF',
	aws_cognito_mfa_types: ['SMS'],
	aws_cognito_password_protection_settings: {
		passwordPolicyMinLength: 8,
		passwordPolicyCharacters: [],
	},
	aws_cognito_verification_mechanisms: ['EMAIL'],
	aws_user_files_s3_bucket: process.env.REACT_APP_AWS_BUCKET,
	aws_user_files_s3_bucket_region: process.env.REACT_APP_AWS_PROJECT_REGION,
};

module.exports = awsmobile;
