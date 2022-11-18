describe('Cognito', function () {
	// Programmatically login via Amazon Cognito API
	/* it('Test login aws', function () {
		cy.loginByCognitoApi(
			Cypress.env('cognito_username'),
			Cypress.env('cognito_password')
		);
	}); */
});

describe('Google', function () {
	it('Test login Google', function () {
		cy.loginByGoogleApi();
	});
});
