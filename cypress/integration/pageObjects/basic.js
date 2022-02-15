class Basic {

    openUrl(url){
        return cy.visit(url)
    }
    linkByText(text){
        return cy.get('a').contains(text)
    }

    buttonByText(text){
        return cy.get('.btn').contains(text)
    }
}

export default Basic