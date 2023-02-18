import style from './Textarea.module.scss';

export const Textarea = ({ value, handleChange, isValid, placeholder }) => {
  const classList = [style.textarea];
  if (!isValid) {
    classList.push(style.textarea_valid_false);
  }
  return (
    <textarea
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={classList.join(' ')}
    />
  );
};
