/// <reference types="cypress" />>

import { baseUrl } from '../../fixtures/fixt.json';
import LoginPage from '../../POM/LoginPage';

describe.only('Test 1: Login to report portal', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('Login to report portal', () => {
    const loginPage = new LoginPage();

    expect(loginPage).not.equal(null);
    const homePage = loginPage.loginToReportPortal();

    const isOpened = homePage.isHomePageOpened();
    isOpened.should('equal', true);

    const isOpened2 = homePage.isHomePageOpened2();
    isOpened2.should('equal', true);
  });

  it('Api check test', () => {
    type LaunchModel = {
      body: {
        content: {};
        page: {
          number: number;
          size: number;
          totalElements: number;
          totalPage: number;
        };
      };
    };

    cy.request({
      method: 'GET',
      url: 'api/v1/reportPortal/launch?filter.eq.id=10',
      headers: {
        authorization: 'Bearer b2776d0f-f91b-42c5-8eac-b3117dec8f3f',
      },
    }).then((response) => {
      const jsonString = JSON.stringify(response);
      const launchModelParsed: LaunchModel = JSON.parse(jsonString);
      cy.log('The is size ' + launchModelParsed.body.page.size);
    });

    // cy.request({
    //   method: 'POST',
    //   url: 'http://localhost:8080/uat/sso/oauth/token',
    //   // form: true,
    //   body: {
    //     username: 'superadmin',
    //     password: 'Wtest100*',
    //   },
    // });
  });
});

/// Read cypress documentation
