import loginData from "../fixtures/login.json"
describe('Login', () => {
  beforeEach(()=>{
    cy.acessarHome()
  })
  it('loginSucesso', () => {
    const usuario = loginData.perfilGestao
    cy.preencherFormLogin(usuario.email, usuario.password)
    cy.submitBtn("Acessar")
    cy.verificarMsgToast("Login realizado com sucesso!")
    cy.verificarUsuarioLogado(usuario.name)
  })

  it('loginSenhaInvalida', () => {
    const usuario = {...loginData.perfilGestao, password: "Teste123"}
    cy.preencherFormLogin(usuario.email, usuario.password)
    cy.submitBtn("Acessar")
    cy.verificarMsgToast("Credenciais inválidas. Verifique seu e-mail e senha.")
  })

  it('loginEmBranco', () => {
    cy.submitBtn("Acessar")
    cy.verificarMsgErro("O campo de e-mail é obrigatório.")
    cy.verificarMsgErro("O campo de senha é obrigatório.")
  })

  it('loginSalao', () => {
    const usuario = loginData.perfilSalao
    cy.preencherFormLogin(usuario.email, usuario.password)
    cy.submitBtn("Acessar")
    cy.verificarMsgToast("Acesse através do app.")
    cy.verificarPagina("app-info", "Acesso pelo APP E2E Burguer")
  })
})