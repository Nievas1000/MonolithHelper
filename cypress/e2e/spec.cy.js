describe('Cognito', function () {
	// Programmatically login via Amazon Cognito API
	it('Test login aws', function () {
		cy.loginByCognitoApi(
			Cypress.env('cognito_username'),
			Cypress.env('cognito_password')
		);
	});

	it('shows onboarding', function () {
		cy.visit('https://d3k7je3o78czwo.cloudfront.net/');
		cy.contains('Codojo');
	});
});
