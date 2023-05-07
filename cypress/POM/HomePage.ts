/// <reference types="cypress" />

class HomePage {
  title: string;

  constructor() {
    this.title = '//*[@title="All Dashboards"]';
  }

  isHomePageOpened() {
    cy.xpath(this.title).then(($t) => {
      if ($t.is(':visible')) {
        return true;
      }
    });
  }
}

export default HomePage;
