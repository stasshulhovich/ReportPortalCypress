/// <reference types="cypress" />

import { resolve } from 'cypress/types/bluebird';

class HomePage {
  title: string;

  constructor() {
    this.title = '//*[@title="All Dashboards"]';
  }

  isHomePageOpened() {
    return cy.xpath(this.title).then(($e) => {
      return $e.is(':visible');
    });
  }

  isHomePageOpened2() {
    return cy.get('span[title="All Dashboards"]').then((element) => {
      if (element.is(':visible')) {
        return true;
      }
    });
  }
}

export default HomePage;
