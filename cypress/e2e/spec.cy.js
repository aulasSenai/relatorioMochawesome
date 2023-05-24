describe('template spec', () => {
  it('Teste 1', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Teste 2', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Teste 3', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Teste 4', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Teste 5', () => {
    cy.visit('https://example.cypress.io').url()
    .then(stringUpperCase = ()  => console.log(stringUpperCase.toUpperCase))
  })

  it('Teste 7', () => {
    cy.visit('https://example.cypress.io')
  })
})