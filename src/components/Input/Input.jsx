import { useState } from 'react';
import style from './Input.module.scss';

export const Input = ({
  value,
  handleChange = () => null,
  isValid = true,
  placeholder = 'Input some text',
}) => {
  const [val, setVal] = useState(value);
  const handleInput = (evt) => {
    setVal(evt.target.value);
    handleChange(evt.target.value);
  };
  const classList = [style.input];
  if (!isValid) {
    classList.push(style.input_valid_false);
  }
  return (
    <input
      type="text"
      value={val}
      onChange={handleInput}
      placeholder={placeholder}
      className={classList.join(' ')}
    />
  );
};
