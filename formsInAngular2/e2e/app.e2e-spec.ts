import { FormsInAngular2Page } from './app.po';

describe('forms-in-angular2 App', () => {
  let page: FormsInAngular2Page;

  beforeEach(() => {
    page = new FormsInAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
