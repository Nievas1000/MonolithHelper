describe('Test Log in and Log out', function () {
	beforeEach(() => {
		cy.visit('http://localhost:3000/login');
		window.localStorage.setItem('userAppKey', '12525');
	});
	it('enter /my-app and log out', function () {
		cy.get('div.user').click();
		cy.contains('Sign Out').click();
		cy.contains('Codojo');
	});
});
