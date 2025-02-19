import { useGlobalContext } from './context';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useGlobalContext();

  return (
    <div className='toggle-container'>
      <button className='dark-toggle' onClick={toggleTheme}>
        {isDarkTheme ? (
          <FaMoon className='toggle-icon' />
        ) : (
          <FaSun className='toggle-icon' />
        )}
      </button>
    </div>
  );
};
export default ThemeToggle;
