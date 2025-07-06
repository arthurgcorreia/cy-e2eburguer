describe('Login', () => {
  beforeEach(()=>{
    cy.acessarHome()
  })
  it('loginSucesso', () => {
    const usuario = {
      email: "teste.qa@gmail.com",
      senha: "Teste@123!",
    }
    cy.preencherFormLogin(usuario.email, usuario.senha)
    cy.submitBtn("Acessar")
    cy.verificarMsgToast("Login realizado com sucesso!")
  })

  it('loginSenhaInvalida', () => {
    const usuario = {
      email: "teste.qa@gmail.com",
      senha: "Teste123!",
    }
    cy.preencherFormLogin(usuario.email, usuario.senha)
    cy.submitBtn("Acessar")
    cy.verificarMsgToast("Credenciais inválidas. Verifique seu e-mail e senha.")
  })

  it('loginEmBranco', () => {
    cy.submitBtn("Acessar")
    cy.verificarMsgErro("O campo de e-mail é obrigatório.")
    cy.verificarMsgErro("O campo de senha é obrigatório.")
  })
})