import { AvamKeypadPage } from './app.po';

describe('avam-keypad App', () => {
  let page: AvamKeypadPage;

  beforeEach(() => {
    page = new AvamKeypadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
