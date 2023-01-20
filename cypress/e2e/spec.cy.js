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
	});
});

describe('Test url', function () {
	it('Use Policy', () => {
		cy.visit('https://www.codojo.io/use-policy');
		cy.contains('Codojo');
	});
	it('Privacity Policy', () => {
		cy.visit('https://www.codojo.io/privacy');
		cy.contains('Codojo');
	});
});
