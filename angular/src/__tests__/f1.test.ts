import { render, screen } from '@testing-library/angular';

import { FComponent } from '../app/results/f1/f1.component';
import userEvent from '@testing-library/user-event';

describe('test case F1', () => {
  beforeEach(async () => {
    await render(FComponent);
    window.alert = jest.fn();
  });

  it('should have a button', () => {
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should show alert when button is clicked', async () => {
    const button = screen.getByRole('button');
    const alertSpy = jest.spyOn(window, 'alert');

    await userEvent.click(button);

    expect(alertSpy).toHaveBeenCalledTimes(1);
    expect(alertSpy).toHaveBeenCalledWith("You've got an email");
  });
});
