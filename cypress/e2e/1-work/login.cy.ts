/// <reference types="cypress" />
/// <reference path="../../src/index.d.ts" />

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('');
  });

  it('Login to report portal', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.

    cy.xpath('//*[@name="login"]').type('superadmin');
    cy.xpath('//*[@name="password"]').type('erebus');
    cy.xpath('(//*[.="Login"])[2]').click();

    cy.location().should('have.text', '/reportportal/dashboard');
    cy.get('.todo-list li').first().should('have.text', 'Pay electric bill');
  });
});
