import { browser, by, element } from 'protractor';

export class ListaPage {
  navigateTo() {
    return browser.get('/lista');
  }

  getTitleText() {
    return element(by.css('header h1')).getText();
  }

  getFooterText() {
    return element(by.css('footer address')).getText();
  }
}
