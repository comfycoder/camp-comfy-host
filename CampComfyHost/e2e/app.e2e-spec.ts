import { CampComfyPage } from './app.po';

import '../src/app/rxjs-extensions';

describe('camp-comfy App', () => {
  let page: CampComfyPage;

  beforeEach(() => {
    page = new CampComfyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Camp Comfy!');
  });
});
