import './DarkModeSwitcher.css'

interface DarkModeInterface {
  handleChange: () => void,
  isChecked: boolean
}

function DarkModeSwitcher({ handleChange, isChecked }: DarkModeInterface) {

  return (
    <div className='darkmode-switcher'>
      <label htmlFor='checkbox' className='switch'>
        <input
          type="checkbox"
          id='checkbox'
          checked={isChecked}
          onChange={handleChange}
        />
        <div className={`darkmode-switcher-button round ${isChecked ? 'dark' : ''}`}></div>
      </label>
    </div>
  );
}

export default DarkModeSwitcher