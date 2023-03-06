import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';
import { act } from 'react-dom/test-utils';

describe('Input', () => {
  it('render component', () => {
    render(<Input />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('write text in input', async () => {
    render(<Input />);
    await act(
      async () => await userEvent.type(screen.getByRole('textbox'), 'test')
    );
    expect(screen.getByRole('textbox')).toHaveValue('test');
  });

  it('input is not valid', () => {
    render(<Input isValid={false} />);
    expect(screen.getByRole('textbox')).toHaveClass('input_valid_false');
  });
});
