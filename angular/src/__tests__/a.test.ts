import { render, screen } from '@testing-library/angular';

import { AComponent } from '../app/results/a/a.component';

describe('test case A', () => {
  beforeEach(async () => {
    await render(AComponent);
  });

  it('should render a heading', () => {
    expect(document.getElementsByTagName('h1')[0]).toBeInTheDocument();
  });

  it("should render a heading with text 'Hello'", () => {
    expect(document.getElementsByTagName('h1')[0]).toHaveTextContent('Hello');
  });

  it('should render a paragraph', () => {
    expect(document.getElementsByTagName('p')[0]).toBeInTheDocument();
  });

  it('should render a paragraph that starts with lorem ipsum', () => {
    expect(document.getElementsByTagName('p')[0]).toHaveTextContent(
      /^Lorem ipsum/
    );
  });
});
