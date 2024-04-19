import { render, screen } from '@testing-library/angular';

import { CComponent } from '../app/results/c/c.component';

describe('test case C', () => {
  beforeEach(async () => {
    await render(CComponent);
  });

  it('should render an a tag', () => {
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it("should render an a tag with text 'Privacy notice'", () => {
    expect(screen.getByRole('link')).toHaveTextContent('Privacy notice');
  });

  it("should render an a tag with href to '/privacy'", () => {
    expect(screen.getByRole('link')).toHaveAttribute('href', '/privacy');
  });
});
