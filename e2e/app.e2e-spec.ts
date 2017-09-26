import { AngularSimpleEmailLookupPage } from './app.po';

describe('angular-simple-email-lookup App', () => {
  let page: AngularSimpleEmailLookupPage;

  beforeEach(() => {
    page = new AngularSimpleEmailLookupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
