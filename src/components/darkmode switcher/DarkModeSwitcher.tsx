import {useEffect, useState} from "react";
import './DarkModeSwitcher.css'

function DarkModeSwitcher() {

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode')
    return savedMode === 'dark'
  })

  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode === 'dark') {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode]);

  return (
    <div className='darkmode-switcher'>
      <label htmlFor='checkbox' className='switch'>
        <input
          type="checkbox"
          id='checkbox'
          checked={isDarkMode}
          onChange={handleModeToggle}
        />
        <div className={`darkmode-switcher-button round ${isDarkMode ? 'dark' : ''}`}></div>
      </label>
    </div>
  );
}

export default DarkModeSwitcher