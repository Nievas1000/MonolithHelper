describe('Open', () => {
  it('frontpage local can be open', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Codojo')
  })
})

describe('Cognito', function () {
  beforeEach(function () {

    // Programmatically login via Amazon Cognito API
    cy.loginByCognitoApi(
      Cypress.env('cognito_username'),
      Cypress.env('cognito_password')
    )
  })

  it('shows onboarding', function () {
    cy.contains('Codojo')
  })
})