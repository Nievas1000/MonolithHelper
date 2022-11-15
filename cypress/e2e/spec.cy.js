describe('Cognito', function () {
	// Programmatically login via Amazon Cognito API
	it('Test', function () {
		cy.loginByCognitoApi(
			Cypress.env('cognito_username'),
			Cypress.env('cognito_password')
		);
	});

	/* it('shows onboarding', function () {
    cy.contains('Codojo')
  }) */
});
