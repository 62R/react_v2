import { useState } from 'react';
import './App.css';
import { Message } from './func-components/Message';

export const App = () => {
  const [message, setMessage] = useState('some message')

  return (
    <div className="App">
      <Message text={message} />
    </div>
  );
}

