import Login from "../pageObjects/login";

const login = new Login();


  When('I type email {string}', (content) => {
      login.emailBox(content)
  });

  And('I click on {string} button', (content) => {
    login.signInButton(content).should('be.visible').click()
  });

  When('I type password {string}', (content) => {
    login.password().type(content)
  });

  When ('I click on {string} button', (content) => {
  login.signInButton(content).should('be.visible').click()
  });

  Then('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
  });

  Then('I see message {string}', (content) =>{
    login.responseMessage(content)
  });