describe('Google', function () {
	it('Test login Google', function () {
		cy.loginByGoogleApi();
	});
});

describe('Github', function () {
	beforeEach(() => {
		cy.visit(
			`https://github.com/login/oauth/authorize?client_id=${Cypress.env(
				'githubClientId'
			)}`
		);
	});
	it('Validation account', () => {
		cy.get('#login_field').type('codojotest@gmail.com');
		cy.get('#password').type('testgithub123');
		cy.get('input[type="submit"]').click();
		cy.url().should(
			'include',
			`authorize?client_id=${Cypress.env('githubClientId')}`
		);
	});
});
