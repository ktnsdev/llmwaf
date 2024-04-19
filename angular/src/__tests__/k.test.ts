import { render, screen } from '@testing-library/angular';

import { KComponent } from '../app/results/k/k.component';

describe('test case K', () => {
  beforeEach(async () => {
    await render(KComponent);
  });

  it('should not affect the heading', () => {
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Travel destinations');
  });

  it('should render a card', () => {
    const divs = document.getElementsByTagName('div');
    expect(divs.length).toBeGreaterThanOrEqual(1);
  });
});
