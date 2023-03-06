import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { MessageForm } from './MessageForm';
import { act } from 'react-dom/test-utils';

const mockHandler = jest.fn();
let inputs = {};
let button = {};

beforeEach(() => {
  render(<MessageForm submitFn={mockHandler} />);
  inputs = screen.getAllByRole('textbox');
  button = screen.getByRole('button');
});

describe('MessageForm', () => {
  it('render component with snapshot', () => {
    const { asFragment } = render(<MessageForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('check validation: Inputs was Empty = false', async () => {
    expect(button).toBeDisabled();
  });

  it('check validation: Name was Empty = false', async () => {
    await act(async () => {
      await userEvent.type(inputs[0], 'Jon{backspace}{backspace}{backspace}');
      await userEvent.type(inputs[1], 'Text');
    });
    expect(button).toBeDisabled();
    expect(inputs[0]).toHaveClass('input_valid_false');
  });

  it('check validation: Text was Empty = false', async () => {
    await act(async () => {
      await userEvent.type(inputs[0], 'Jon');
      await userEvent.type(inputs[1], 'Tex{backspace}{backspace}{backspace}');
    });
    expect(button).toBeDisabled();
    expect(inputs[1]).toHaveClass('textarea_valid_false');
  });

  it('submit form', async () => {
    await act(async () => {
      await userEvent.type(inputs[0], 'Jon');
      await userEvent.type(inputs[1], 'Text');
    });

    await act(async () => {
      await userEvent.click(button);
    });

    expect(mockHandler).toBeCalledTimes(1);
  });

  it('clear Text after submit', async () => {
    await act(async () => {
      await userEvent.type(inputs[0], 'Jon');
      await userEvent.type(inputs[1], 'Text');
    });

    await act(async () => {
      await userEvent.click(button);
    });
    expect(inputs[1]).toHaveValue('');
  });
});
