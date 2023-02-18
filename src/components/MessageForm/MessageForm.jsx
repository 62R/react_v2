import style from './MessageForm.module.scss';
import { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';

export const MessageForm = ({ submitFn }) => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const [authorIsValid, setAuthorValid] = useState(true);
  const [textIsValid, setTextValid] = useState(true);
  const [buttonState, setButtonState] = useState(true);

  useEffect(() => {
    author && text ? setButtonState(false) : setButtonState(true);
  }, [author, text]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!buttonState) {
      submitFn(author, text);
      setText('');
      setTextValid(true);
    }
  };

  const changeAuthor = (evt) => {
    setAuthor(evt.target.value);
    setAuthorValid(checkValidation(evt.target.value));
  };

  const changeText = (evt) => {
    setText(evt.target.value);
    setTextValid(checkValidation(evt.target.value));
  };

  const checkValidation = (value) => {
    if (value !== '') {
      return true;
    }
    return false;
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Input
        value={author}
        handleChange={changeAuthor}
        isValid={authorIsValid}
        placeholder="Enter your name"
      />
      <Textarea
        value={text}
        handleChange={changeText}
        isValid={textIsValid}
        placeholder="Write some message"
      />
      <Button label="Push" disabled={buttonState} />
    </form>
  );
};
