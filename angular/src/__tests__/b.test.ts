import { render, screen } from '@testing-library/angular';

import { BComponent } from '../app/results/b/b.component';

describe('test case B', () => {
  beforeEach(async () => {
    await render(BComponent);
  });

  it('should not remove heading', () => {
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('should not affect heading text: morning', async () => {
    jest.useFakeTimers().setSystemTime(new Date('2024-01-01T09:00:00Z'));

    await render(BComponent);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      `Good morning`
    );
  });

  it('should not affect heading text: afternoon', async () => {
    jest.useFakeTimers().setSystemTime(new Date('2024-01-01T16:00:00Z'));

    await render(BComponent);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      `Good afternoon`
    );
  });

  it('should not remove paragraph', () => {
    expect(screen.getByRole('paragraph')).toBeInTheDocument();
  });

  it('should not affect paragraph text', () => {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();

    expect(screen.getByRole('paragraph')).toHaveTextContent(
      `${hours}:${String(minutes).padStart(2, '0')}`
    );
  });
});
