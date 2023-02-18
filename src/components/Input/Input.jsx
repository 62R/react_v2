import style from './Input.module.scss';

export const Input = ({ value, handleChange, isValid, placeholder }) => {
  const classList = [style.input];
  if (!isValid) {
    classList.push(style.input_valid_false);
  }
  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={classList.join(' ')}
    />
  );
};
