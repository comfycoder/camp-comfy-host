import { browser, by, element } from 'protractor';

export class CampComfyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cc-root h2')).getText();
  }
}
