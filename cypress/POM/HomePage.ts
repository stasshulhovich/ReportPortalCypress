/// <reference types="cypress" />

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
}

export default HomePage;
