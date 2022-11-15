describe('Cognito', function () {

  it('shows onboarding', function () {
    cy.loginByCognitoApi(
      Cypress.env('cognito_username'),
      Cypress.env('cognito_password')
    )
  })
})