import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Textarea } from './Textarea';
import { act } from 'react-dom/test-utils';

describe('Textarea', () => {
  it('render component', () => {
    render(<Textarea />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('write text in textarea', async () => {
    render(<Textarea />);
    await act(
      async () => await userEvent.type(screen.getByRole('textbox'), 'test')
    );
    expect(screen.getByRole('textbox')).toHaveValue('test');
  });

  it('textarea is not valid', () => {
    render(<Textarea isValid={false} />);
    expect(screen.getByRole('textbox')).toHaveClass('textarea_valid_false');
  });
});
