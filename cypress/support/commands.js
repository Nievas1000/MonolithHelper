import { Auth } from 'aws-amplify';

Cypress.Commands.add('loginByCognitoApi', (username, password) => {
	const awsconfig = {
		aws_user_pools_id: Cypress.env("awsUserPoolId"),
		aws_user_pools_web_client_id: Cypress.env("awsClientId"),
	  };
	Auth.configure(awsconfig);

	const log = Cypress.log({
		displayName: 'COGNITO LOGIN',
		message: [`🔐 Authenticating | ${username}`],
		// @ts-ignore
		autoEnd: false,
	});

	log.snapshot('before');

	const signIn = Auth.signIn({ username, password });

	cy.wrap(signIn, { log: false }).then((cognitoResponse) => {
		const keyPrefixWithUsername = `${cognitoResponse.keyPrefix}.${cognitoResponse.username}`;

		window.localStorage.setItem(
			`${keyPrefixWithUsername}.idToken`,
			cognitoResponse.signInUserSession.idToken.jwtToken
		);

		window.localStorage.setItem(
			`${keyPrefixWithUsername}.accessToken`,
			cognitoResponse.signInUserSession.accessToken.jwtToken
		);

		window.localStorage.setItem(
			`${keyPrefixWithUsername}.refreshToken`,
			cognitoResponse.signInUserSession.refreshToken.token
		);

		window.localStorage.setItem(
			`${keyPrefixWithUsername}.clockDrift`,
			cognitoResponse.signInUserSession.clockDrift
		);

		window.localStorage.setItem(
			`${cognitoResponse.keyPrefix}.LastAuthUser`,
			cognitoResponse.username
		);

		window.localStorage.setItem('amplify-authenticator-authState', 'signedIn');
		log.snapshot('after');
		log.end();
	});
});

Cypress.Commands.add('loginByGoogleApi', () => {
	cy.log('Logging in to Google');
	cy.request({
		method: 'POST',
		url: 'https://www.googleapis.com/oauth2/v4/token',
		body: {
			grant_type: 'refresh_token',
			client_id: Cypress.env('googleClientId'),
			client_secret: Cypress.env('googleClientSecret'),
			refresh_token: Cypress.env('googleRefreshToken'),
		},
	}).then(({ body }) => {
		const { access_token, id_token } = body;

		cy.request({
			method: 'GET',
			url: 'https://www.googleapis.com/oauth2/v3/userinfo',
			headers: { Authorization: `Bearer ${access_token}` },
		}).then(({ body }) => {
			cy.log(body);
			const userItem = {
				token: id_token,
				user: {
					googleId: body.sub,
					email: body.email,
					givenName: body.given_name,
					familyName: body.family_name,
					imageUrl: body.picture,
				},
			};

			window.localStorage.setItem('googleCypress', JSON.stringify(userItem));
			cy.visit('https://d3k7je3o78czwo.cloudfront.net/');
		});
	});
});
