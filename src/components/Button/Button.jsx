import style from './Button.module.scss';

export const Button = ({ label, handleClick, disabled = false }) => {
  const classList = [style.button];
  if (disabled) {
    classList.push(style.button_disabled);
  }
  return (
    <button
      className={classList.join(' ')}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
