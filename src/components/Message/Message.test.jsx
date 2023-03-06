import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Message } from './Message';

describe('Message', () => {
  it('render name', () => {
    render(<Message author="Name" text="Test" />);
    expect(screen.getByText(/name/i)).toBeInTheDocument();
  });

  it('render text', () => {
    render(<Message author="Name" text="Test" />);
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });

  it('render message with same author', () => {
    render(<Message author="Name" text="Test" isOtherAuthor={false} />);
    expect(screen.queryByText(/name/i)).toBeNull();
  });

  it('render Bot message have bot align', () => {
    render(<Message author="Bot" text="Test" />);
    expect(screen.getByText(/test/i).parentElement).toHaveClass(
      'message_align_bot'
    );
  });

  it('render You message have you align', () => {
    render(<Message author="Name" text="Test" />);
    expect(screen.getByText(/test/i).parentElement).toHaveClass(
      'message_align_you'
    );
  });

  it('render first message', () => {
    render(<Message author="Name" text="Test" isFirstMessage={true} />);
    expect(screen.getByText(/test/i).parentElement).toHaveClass(
      'message_order_first'
    );
  });
});
