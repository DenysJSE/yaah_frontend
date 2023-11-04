import './button.css'

interface ButtonInterface {
  text: string;
  isDisabled?: boolean
}

function Button({text, isDisabled}: ButtonInterface) {
  return (
    <button className={`button-component ${isDisabled ? 'button-component-disable' : '' }`} disabled={isDisabled}>{text}</button>
  );
}

export default Button