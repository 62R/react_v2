import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';
import { act } from 'react-dom/test-utils';

describe('Button', () => {
  it('render component', () => {
    render(<Button label="test" />);
    expect(screen.getByRole('button')).toHaveTextContent('test');
  });

  it('button click', async () => {
    const mockHandler = jest.fn();
    render(<Button label="test" handleClick={mockHandler} />);
    await act(async () => await userEvent.click(screen.getByRole('button')));
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  it('button is disabled', () => {
    render(<Button label="test" disabled={true} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
