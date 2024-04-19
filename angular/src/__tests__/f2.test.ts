import { render, screen } from '@testing-library/angular';

import { FComponent } from '../app/results/f2/f2.component';
import userEvent from '@testing-library/user-event';

describe('test case F2', () => {
  beforeEach(async () => {
    await render(FComponent);
    window.alert = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have a button', () => {
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should show alert when button is clicked 1 time', async () => {
    const button = screen.getByRole('button');

    await userEvent.click(button);

    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith("You've got an email (1)");
  });

  it('should show alert when button is clicked 2 times', async () => {
    const button = screen.getByRole('button');

    await userEvent.click(button);

    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith("You've got an email (1)");

    await userEvent.click(button);

    expect(window.alert).toHaveBeenCalledTimes(2);
    expect(window.alert).toHaveBeenCalledWith("You've got an email (2)");
  });
});