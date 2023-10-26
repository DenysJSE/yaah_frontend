import './button.css'

interface ButtonInterface {
  text: string
}

function Button({text}: ButtonInterface) {
  return (
    <button className='button-component'>{text}</button>
  );
}

export default Button