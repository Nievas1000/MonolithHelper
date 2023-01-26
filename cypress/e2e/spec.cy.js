describe('Test to login with Google', function () {
	it('Google success test', function () {
		cy.loginByGoogleApiSucces();
	});
	it('Google fail test', function () {
		cy.loginByGoogleApiFail();
	});
});

describe('Test to login with Github', function () {
	beforeEach(() => {
		cy.visit(
			`https://github.com/login/oauth/authorize?client_id=${Cypress.env(
				'githubClientId'
			)}`
		);
	});
	it('Validation account on succes', () => {
		cy.get('#login_field').type('codojotest@gmail.com');
		cy.get('#password').type('testgithub123');
		cy.get('input[type="submit"]').click();
	});
	it('Validation account on failure', () => {
		cy.get('#login_field').type('codojofail@gmail.com');
		cy.get('#password').type('failgithub123');
		cy.get('input[type="submit"]').click();
		cy.contains('Incorrect username or password.');
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
