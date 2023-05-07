/// <reference types="cypress" />

import { baseUrl } from '../fixtures/fixt.json';
import LoginPage from '../POM/LoginPage';

describe('Test 1: Login to report portal', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('Login to report portal', () => {
    const loginPage = new LoginPage();
    expect(loginPage).not.equal(null);

    const homePage = loginPage.loginToReportPortal();
    expect(homePage.isHomePageOpened()).to.equal(true);
  });
});
