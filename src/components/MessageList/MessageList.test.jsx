import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MessageList } from './MessageList';

const messageList = [
  {
    author: 'Bot',
    text: 'Test1',
  },
  {
    author: 'Tom',
    text: 'Test2',
  },
  {
    author: 'Tom',
    text: 'Test3',
  },
];

describe('Textarea', () => {
  it('render component', () => {
    render(<MessageList messageList={messageList} />);
    expect(screen.getByText('Bot')).toBeInTheDocument();
    expect(screen.getAllByText('Tom')).toHaveLength(1);
    expect(screen.getByText('Test1')).toBeInTheDocument();
    expect(screen.getByText('Test2')).toBeInTheDocument();
    expect(screen.getByText('Test3')).toBeInTheDocument();
  });
  it('render component with spanshot', () => {
    const { asFragment } = render(<MessageList messageList={messageList} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
