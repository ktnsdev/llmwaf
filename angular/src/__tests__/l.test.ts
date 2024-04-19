import { render, screen, waitFor } from '@testing-library/angular';

import { LComponent } from '../app/results/l/l.component';

describe('test case L', () => {
  beforeEach(async () => {
    await render(LComponent);
  });

  it('should render complete text after the fetch is complete', async () => {
    await waitFor(
      () => {
        const complete = screen.getByText('API fetch complete');
        expect(complete).toBeInTheDocument();
      },
      {
        timeout: 2100,
      }
    );
  });
});
