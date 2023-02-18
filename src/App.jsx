import { MessageForm } from './components/MessageForm/MessageForm';
import { MessageList } from './components/MessageList/MessageList';

import style from './App.module.scss';
import { useEffect, useState } from 'react';

export const App = () => {
  const [messageList, setMessageList] = useState([
    {
      author: 'Bot',
      text: 'Wait a massage',
    },
    {
      author: 'Tom',
      text: 'Hi, Bot',
    },
    {
      author: 'Tom',
      text: 'How are you?',
    },
  ]);

  useEffect(() => {
    let subscribtion = undefined;
    if (messageList.at(-1).author !== 'Bot') {
      subscribtion = setTimeout(() => {
        addMessage('Bot', 'Ok');
      }, 1500);
    }
    return () => {
      clearTimeout(subscribtion);
    };
  }, [messageList]);

  const addMessage = (author, text) => {
    setMessageList((pverMessageList) => [
      ...pverMessageList,
      { author: author, text: text },
    ]);
  };

  return (
    <div>
      <h1>React App</h1>
      <div className={style.wrapper}>
        <MessageList messageList={messageList} />
        <MessageForm submitFn={addMessage} />
      </div>
    </div>
  );
};
