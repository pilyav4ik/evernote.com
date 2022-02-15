class Login{
    emailBox(email){
        return cy.get('#username').type(email)
    }
    password(){
        return cy.get('input[type="password"]')
    }
    signInButton(textButton){
        return cy.get('#loginButton').contains(textButton)
    }
    responseMessage(responseMessage){
        return cy.get('#responseMessage').contains(responseMessage)
    }
}

export default Login