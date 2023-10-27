import './DarkModeSwitcher.css'

interface DarkModeInterface {
  handleChange: () => void,
  isChecked: boolean
}

function DarkModeSwitcher({ handleChange, isChecked }: DarkModeInterface) {

  return (
    <div className='darkmode-switcher'>
      <label htmlFor='darkmode-switcher-checkbox' className='darkmode-switcher-switch'>
        <input
          type="checkbox"
          id='darkmode-switcher-checkbox'
          checked={isChecked}
          onChange={handleChange}
        />
        <div className='darkmode-switcher-button darkmode-switcher-round'></div>
      </label>
    </div>
  );
}

export default DarkModeSwitcher