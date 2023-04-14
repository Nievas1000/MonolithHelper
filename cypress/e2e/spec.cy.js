describe('Test to login with Google', function () {
	it('Google success test', function () {
		cy.loginByGoogleApiSucces();
	});
	it('Google fail test', function () {
		cy.loginByGoogleApiFail();
	});
});

describe('Test Log in and Log out', function () {
	beforeEach(() => {
		cy.visit('https://app.taffi.io/login');
		window.localStorage.setItem('userAppKey', '12525');
	});
	it('enter /my-app and log out', function () {
		cy.get('div.user').click();
		cy.contains('Sign Out').click();
		cy.contains('Login');
	});
});

describe('Test visit my app without being logged in', function () {
	beforeEach(() => {
		cy.visit('https://app.taffi.io/my-app');
	});
	it('redirect to login', function () {
		cy.contains('Get started for free');
		cy.contains('Monolith to microservices in 60 seconds');
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
	it('Validation account on failure', () => {
		cy.get('#login_field').type('codojofail@gmail.com');
		cy.get('#password').type('failgithub123');
		cy.get('input[type="submit"]').click();
		cy.contains('Incorrect username or password.');
	});
	it('Validation account on succes', () => {
		cy.get('#login_field').type('codojotest@gmail.com');
		cy.get('#password').type('testgithub123');
		cy.get('input[type="submit"]').click();
	});
});

describe('Test url', function () {
	it('Use Policy', () => {
		cy.visit('https://www.taffi.io/use-policy');
		cy.contains('Login');
	});
	it('Privacity Policy', () => {
		cy.visit('https://www.taffi.io/privacy');
		cy.contains('Login');
	});
});

describe('Test for the number of applications of a user', function () {
	it('User apps Test', function () {
		cy.request({
			method: 'POST',
			url: Cypress.env('getAppsUrl'),
			body: {
				type: 'demo',
				userApplicationKey: '12525',
			},
			headers: {
				'x-api-key': Cypress.env('getAppsToken'),
			},
			failOnStatusCode: false,
		}).then((resp) => {
			const { body, status } = resp;
			cy.log(body);
			expect(body.body.length).to.deep.equal(3);
			expect(status).to.eq(200);
		});
	});
});
