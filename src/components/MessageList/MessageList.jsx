import { Message } from '../Message/Message';
import style from './MessageList.module.scss';

export const MessageList = ({ messageList }) => {
  let prevAuthor = '';
  return (
    <div className={style.messagelist}>
      {messageList.map((message, index) => {
        const messageEl = (
          <Message
            key={index}
            author={message.author}
            text={message.text}
            isOtherAuthor={message.author !== prevAuthor}
            isFirstMessage={index === 0}
          />
        );
        prevAuthor = message.author;
        return messageEl;
      })}
    </div>
  );
};
