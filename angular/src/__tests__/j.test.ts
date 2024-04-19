import { render, screen } from '@testing-library/angular';

import { JComponent } from '../app/results/j/j.component';

describe('test case J', () => {
  beforeEach(async () => {
    await render(JComponent);
  });

  it('should render a button', () => {
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should not affect button text', () => {
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Hover me');
  });
});
