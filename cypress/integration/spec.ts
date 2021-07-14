describe('My First Test', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Home page automation testing', () => {
    cy.get('#welcomeID').should('exist')
    cy.get('#selectModuleID').should('exist')
    cy.get('#EmployeeModuleID').should('exist')
    cy.get('#CompanyModuleID').should('exist')
  })

  it('Home page verify word', () => {
    cy.get('#welcomeID').contains('Welcome to my homepage')
    cy.get('#selectModuleID').contains('Please Select Modules')
    cy.get('#EmployeeModuleID').contains('Employee Module')
    cy.get('#CompanyModuleID').contains('Company Module')
  })

  it('Home page navigation 1', () => {
    cy.get('a[href="http://172.16.16.151:8080/').should($a => {
      expect($a.attr('href'), 'href').to.equal('http://172.16.16.151:8080/')
      expect($a.attr('target'), 'target').to.equal('_blank')
    })
  })

  it('Home page navigation 2', () => {
    // cy.get('a[href="http://172.16.16.151:8080/').should('have.attr', 'target', '_blank')
    cy.get('a[href="http://172.16.16.151:8080/').should($a => {
      expect($a.attr('href'), 'href').to.equal('http://172.16.16.151:8080/')
      expect($a.attr('target'), 'target').to.equal('_blank')
    })
  })
})
