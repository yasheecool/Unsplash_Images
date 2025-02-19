import { useEffect } from 'react';
import { useContext, createContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const getInitialValue = () => {
    const previousVal = localStorage.getItem('prefers-dark');
    if (previousVal === null)
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (previousVal === 'true') return true;
    if (previousVal === 'false') return false;
  };

  const [isDarkTheme, setIsDarkTheme] = useState(getInitialValue());
  const [searchValue, setSearchValue] = useState('cat');

  const toggleTheme = () => {
    const newVal = !isDarkTheme;
    setIsDarkTheme(newVal);
    if (newVal) localStorage.setItem('prefers-dark', JSON.stringify(true));
    else localStorage.setItem('prefers-dark', JSON.stringify(false));
  };

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkTheme]);

  return (
    <GlobalContext.Provider
      value={{ isDarkTheme, toggleTheme, searchValue, setSearchValue }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
