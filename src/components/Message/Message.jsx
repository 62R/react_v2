import styles from './Message.module.scss';

export const Message = ({ author, text, isOtherAuthor, isFirstMessage }) => {
  const isBot = author === 'Bot';
  const classList = [styles.message];
  isBot
    ? classList.push(styles.message_align_bot)
    : classList.push(styles.message_align_you);
  isOtherAuthor
    ? classList.push(styles.message_margin_otherauthor)
    : classList.push(styles.message_margin_sameauthor);
  if (isFirstMessage) {
    classList.push(styles.message_order_first);
  }
  return (
    <div className={classList.join(' ')}>
      {isOtherAuthor && <p className={styles.author}> {author} </p>}
      <p className={styles.text}> {text} </p>
    </div>
  );
};
