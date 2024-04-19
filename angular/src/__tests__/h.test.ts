import { fireEvent, render } from '@testing-library/angular';

import { HComponent } from '../app/results/h/h.component';

describe('test case H', () => {
  beforeEach(async () => {
    await render(HComponent);
  });

  it('should still have 15 sections', () => {
    const sections = document.querySelectorAll('section');
    expect(sections.length).toBe(15);
  });

  it('should be scrollable', async () => {
    await fireEvent.scroll(window, { target: { scrollY: 999999 } });
  });
});
