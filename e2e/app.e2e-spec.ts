import { Ng2DirectivePage } from './app.po';

describe('ng2-directive App', () => {
  let page: Ng2DirectivePage;

  beforeEach(() => {
    page = new Ng2DirectivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
