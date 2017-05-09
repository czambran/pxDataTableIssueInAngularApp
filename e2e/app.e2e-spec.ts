import { DataTableProblemPage } from './app.po';

describe('data-table-problem App', () => {
  let page: DataTableProblemPage;

  beforeEach(() => {
    page = new DataTableProblemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
