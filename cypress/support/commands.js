Cypress.Commands.add('acessarHome', ()=>{
    cy.visit('/')
    cy.url().should('include', '/')
    cy.contains('h1', 'Faça seu login')
})

Cypress.Commands.add('preencherFormLogin', (email, senha)=>{
    cy.get('#email').type(email);
    cy.get('#password').type(senha);
})

Cypress.Commands.add('submitBtn', (textoBtn)=>{
    cy.contains("button[type=submit]", textoBtn).click();
})

Cypress.Commands.add('verificarMsgToast', (msgEsperada)=>{
    cy.get(".Toastify__toast-body")
    .should('be.visible')
    .and("have.text", msgEsperada)
})
Cypress.Commands.add('verificarMsgErro', (msgEsperada)=>{
    cy.get("[class^='home_errorText']")
    .should('be.visible')
    .and("contain.text", msgEsperada)
    .and("have.css", 'color', 'rgb(230, 57, 70)')
})