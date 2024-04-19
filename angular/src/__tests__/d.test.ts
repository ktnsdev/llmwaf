import { render, screen } from '@testing-library/angular';

import { DComponent } from '../app/results/d/d.component';

describe('test case D', () => {
  beforeEach(async () => {
    await render(DComponent);
  });

  it("should not affect the heading's text", () => {
    expect(screen.getByText('Current path')).toBeInTheDocument();
  });
});
