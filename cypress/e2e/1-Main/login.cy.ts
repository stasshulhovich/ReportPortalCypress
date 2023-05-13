/// <reference types="cypress" />

import { baseUrl } from '../../fixtures/fixt.json';
import LoginPage from '../../POM/LoginPage';

describe.only('Test 1: Login to report portal', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it.only('Login to report portal', () => {
    const loginPage = new LoginPage();
    expect(loginPage).not.equal(null);
    const homePage = loginPage.loginToReportPortal();
    const isOpened = homePage.isHomePageOpened();
    isOpened.should('equal', true);
  });

  it(
    'smoke test develop api',
    {
      env: {
        api: 'https://dev.myapi.com',
      },
    },
    () => {
      // This timout applied to this test only
      Cypress.config('defaultCommandTimeout', 3000);
      cy.request(Cypress.env('api')).its('status').should('eq', 200);
    }
  );
});

/// Implement api
/// Implement more tests
/// Read cypress documentation
