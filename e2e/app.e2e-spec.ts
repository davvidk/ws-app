import { Ws.AppPage } from './app.po';

describe('ws.app App', () => {
  let page: Ws.AppPage;

  beforeEach(() => {
    page = new Ws.AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
