import { act, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { App } from './App';

describe('Input', () => {
  it('render component with spanshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('write message', async () => {
    render(<App />);
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');
    await act(async () => {
      await userEvent.type(inputs[0], 'Jon');
      await userEvent.type(inputs[1], 'Text');
    });
    await act(async () => {
      await userEvent.click(button);
    });
    expect(screen.getByText('Text')).toBeInTheDocument();
  });

  it('Bot write answer after delay', async () => {
    render(<App />);
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');
    await act(async () => {
      await userEvent.type(inputs[0], 'Jon');
      await userEvent.type(inputs[1], 'Text');
    });
    await act(async () => {
      await userEvent.click(button);
    });
    await waitFor(() => expect(screen.getByText('Ok')).toBeInTheDocument(), {
      timeout: 2000,
    });
  });
});
