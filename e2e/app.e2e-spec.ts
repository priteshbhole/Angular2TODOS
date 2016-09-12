import { At2todosPage } from './app.po';

describe('at2todos App', function() {
  let page: At2todosPage;

  beforeEach(() => {
    page = new At2todosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
