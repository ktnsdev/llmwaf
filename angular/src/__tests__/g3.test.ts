import { render, screen } from '@testing-library/angular';

import { GComponent } from '../app/results/g3/g3.component';
import userEvent from '@testing-library/user-event';

describe('test case G3', () => {
  beforeEach(async () => {
    await render(GComponent);
  });

  it('should have a text input', () => {
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('should accept numberic characters', async () => {
    const input = screen.getByRole('textbox');

    await userEvent.type(input, '1234567890');

    expect(input).toHaveValue('1234567890');
  });

  it('should not accept non-numeric characters', async () => {
    const input = screen.getByRole('textbox');

    await userEvent.type(input, 'abc');

    expect(input).not.toHaveValue();
  });

  it('should accept only numeric characters', async () => {
    const input = screen.getByRole('textbox');

    await userEvent.type(input, 'abc123def456');

    expect(input).toHaveValue('123456');
  });

  it('should have a button', () => {
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should have the text "Submit" on the button', () => {
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Submit');
  });

  it('should not show error when clicking submit and there is no input', async () => {
    const button = screen.getByRole('button');
    await userEvent.click(button);
    const error = screen.queryByText('Input exceeds the maximum value');
    expect(error).not.toBeInTheDocument();
  });

  it('should not show error when clicking submit and input < 1000', async () => {
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    await userEvent.type(input, '999');
    await userEvent.click(button);

    const error = screen.queryByText('Input exceeds the maximum value');
    expect(error).not.toBeInTheDocument();
  });

  it('should show error when clicking submit and input >= 1000', async () => {
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    await userEvent.type(input, '1000');
    await userEvent.click(button);

    const error = screen.queryByText('Input exceeds the maximum value');
    expect(error).toBeInTheDocument();
  });
});
