/// <reference types="cypress" />

import HomePage from './HomePage';
import { login, password } from '../fixtures/fixt.json';

class LoginPage {
  login: string;
  password: string;
  submit: string;

  constructor() {
    this.login = '//*[@name="login"]';
    this.password = '//*[@name="password"]';
    this.submit = '(//*[.="Login"])[2]';
  }

  loginToReportPortal() {
    cy.xpath(this.login).type(login);
    cy.xpath(this.password).type(password);
    cy.xpath(this.submit).click();

    return new HomePage();
  }
}

export default LoginPage;
